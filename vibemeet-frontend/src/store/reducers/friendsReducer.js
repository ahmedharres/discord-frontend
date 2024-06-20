import { friendsActions } from "../actions/friendesAction";

const initState = {
    friends: [],
    pindingFrinedesInvitations: [],
    onlineFriends: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case friendsActions.SET_PINDING_FRIENDS_INVITATIONS:
            return {
                ...state,
                pindingFrinedesInvitations: action.pindingFrinedesInvitations,
            };
        case friendsActions.SET_FRIENDS:
            return {
                ...state,
                friends: action.friends,
            };
            case friendsActions.SET_ONLINE_USERS:
                return {
                  ...state,
                  onlineUsers: action.onlineUsers,
                };
        default:
            return state;

    }
}

export default reducer;