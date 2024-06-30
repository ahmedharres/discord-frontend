import store from '../store/store';
import { setLocalStream, setRemoteStreams } from '../store/actions/roomActions';
import peer from 'simple-peer';
import * as socketConnection from './socketConnection';

const getConfiguration = () => {
    const turnIceServers = null;

    if (turnIceServers) {
        return {
            iceServers: turnIceServers
        };
    } else {
        console.warn('Using only STUN server');
        return {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302',
                },
            ],
        };
    }
};


const onlyAudioConstraints = {
    audio: true,
    video: false,
}

const defaultConstraints = {
    video: true,
    audio: true,
}




export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
    const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints;

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream));
        callbackFunc();
    }).catch(err => {
        console.log(err);
        console.log('can not get access to local stream');
    })
}

let peers = {};

export const prepareNewPeerConnection = (connUserSocketId, isInitiator) => {
    const localStream = store.getState().room.localStream;

    if (isInitiator) {
        console.log('preparing new peer connecton as initaitor')
    } else {
        console.log('preparing new peer connecton as not initaitor')

    }


    peers[connUserSocketId] = new peer({
        initiator: isInitiator,
        config: getConfiguration(),
        stream: localStream,

    });

    peers[connUserSocketId].on('signal', data => {
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId,
        };

        socketConnection.signalPeerData(signalData);

    });

    peers[connUserSocketId].on('stream', (remoteStream) => {
        console.log('Remote stream came from other user');
        console.log('Direct connection has been established');

        remoteStream.connUserSocketId = connUserSocketId;
        addNewRemoteStream(remoteStream);
    });
};

export const handleSignalingData = (data) => {
    const { connUserSocketId, signal } = data;
    if (peers[connUserSocketId]) {
        peers[connUserSocketId].signal(signal);
    }
}

const addNewRemoteStream = (remoteStream) => {
    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = [...remoteStreams, remoteStream];

    store.dispatch(setRemoteStreams(newRemoteStreams));
}

export const closeAllConnections = () => {
    Object.entries(peers).forEach((mappedObject) => {
        const connUserSocketId = mappedObject[0];
        if (peers[connUserSocketId]) {
            peers[connUserSocketId].destroy();
            delete peers[connUserSocketId];
        }
    });
};

export const handleParticipantLeftRoom = (data) => {
    const { connUserSocketId } = data;

    if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();
        delete peers[connUserSocketId];
    }

    const remoteStreams = store.getState().room.remoteStreams;
    const newRemoteStreams = remoteStreams.filter(
        (remoteStream) => remoteStream.connUserSocketId !== connUserSocketId
    );


    store.dispatch(setRemoteStreams(newRemoteStreams));

};

export const switchOutgoingTracks = (stream) => {
    for (let socket_id in peers) {
        for (let index in peers[socket_id].streams[0].getTracks()) {
            for (let index2 in stream.getTracks()) {
                if (
                    peers[socket_id].streams[0].getTracks()[index].kind ===
                    stream.getTracks()[index2].kind
                ) {
                    peers[socket_id].replaceTrack(
                        peers[socket_id].streams[0].getTracks()[index],
                        stream.getTracks()[index2],
                        peers[socket_id].streams[0]
                    );
                    break;
                }
            }
        }
    }
};
