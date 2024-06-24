import io from 'socket.io-client';
import { setPindingFrinedesInvitations, setFriends, setOnlineUsers } from '../store/actions/friendesAction';
import store from '../store/store';
import { updateDirectChatHistoryIfActive } from '../shared/utiles/chat';
import * as roomHandler from "./roomHandler";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    socket = io('http://localhost:9050', {
        auth: {
            token: jwtToken,
        }
    });

    socket.on("connect", () => {
        console.log("succesfully connected with socket.io server");
        console.log(socket.id);
    });

    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data;
        store.dispatch(setPindingFrinedesInvitations(pendingInvitations));
    });

    socket.on("friends-list", (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    });

    socket.on("online-users", (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on("direct-chat-history", (data) => {
        console.log(data);
        updateDirectChatHistoryIfActive(data);
    });

    socket.on('room-create', (data) => {
        roomHandler.newRoomCreated(data);

    });

    socket.on('active-rooms', data => {
        roomHandler.updateActiveRooms(data);
    })
};

export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
    socket.emit('room-create');
}