import { openAlertMessage } from './alertAction';
import * as api from '../../api';

export const friendsActions = {
    SET_FRIENDS: 'SET_FRIENDS_ACTIONS',
    SET_PINDING_FRIENDS_INVITATIONS: 'SET_PINDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS: 'SET_ONLINE_USERS',

};

export const getActions = (dispatch) => {
    return {
        sendFriendInvitation: (data, closeDialogHandler) =>
            dispatch(sendFriendInvitation(data, closeDialogHandler)),

        acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
    };
};

export const setPindingFrinedesInvitations = (pindingFrinedesInvitations) => {
    return {
        type: friendsActions.SET_PINDING_FRIENDS_INVITATIONS,
        pindingFrinedesInvitations,
    };
};

export const setFriends = (friends) => {
    return {
        type: friendsActions.SET_FRIENDS,
        friends,
    }
}

export const setOnlineUsers = (onlineUsers) => {
    return {
      type: friendsActions.SET_ONLINE_USERS,
      onlineUsers,
    };
  };
  

const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendFriendInvitation(data);

        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage('Invitation has been sent!'));
            closeDialogHandler();
        };
    };


};


const acceptFriendInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.acceptFriendInvitation(data);
        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage('Invitation Accepted'));
        };
    };

};
const rejectFriendInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.rejectFriendInvitation(data);
        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage('Invitation Rejected'));
        };
    };


};