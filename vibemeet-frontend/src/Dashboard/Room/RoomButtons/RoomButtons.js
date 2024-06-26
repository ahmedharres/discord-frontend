import React from 'react';
import { styled } from '@mui/system';
import CameraButton from './CameraButton';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import ScreenShareButton from './ScreenShareButton';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/roomActions';

const MainContainer = styled('div')({
    height: '15%',
    width: '100%',
    backgroundColor: '#696969',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const RoomButtons = (props) => {
    const { localStream, isUserJoinWithOnlyAudio } = props;
    return (
        <MainContainer>
            <MicButton localStream={localStream} />
            {!isUserJoinWithOnlyAudio && <CameraButton localStream={localStream} />}
            {!isUserJoinWithOnlyAudio && <ScreenShareButton {...props} />}
            <CloseRoomButton />
        </MainContainer>
    );
};

const mapStoreStateToProps = (state) => {
    return {
        localStream: state.room.localStream,
        screenSharingStream: state.room.screenSharingStream,
        isScreenSharingActive: state.room.isScreenSharingActive,
        isUserJoinWithOnlyAudio: state.room.isUserJoinWithOnlyAudio,
    };
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(RoomButtons);
