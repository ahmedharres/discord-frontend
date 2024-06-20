import io from 'socket.io-client'
import { setPindingFrinedesInvitations, setFriends,setOnlineUsers} from '../store/actions/friendesAction';
import store from '../store/store';
let socket = null;
export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    socket = io('http://localhost:9050', {
        auth: {
            token: jwtToken,
        }
    });



    socket.on('connect', () => {
        console.log('succesfully connected with socket.io server');
        console.log(socket.id);
    });

    socket.on('friends-invitations', (data) => {
        const { pindingInvitations } = data;
        store.dispatch(setPindingFrinedesInvitations(pindingInvitations))
    });

    socket.on('friends-list', (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends));
    });

    socket.on("online-users", (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers));
      });
    };
    