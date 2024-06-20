import React from "react";
import { styled } from '@mui/system';
 import AddFriendButton from './AddFriendButton';
 import FriendsTitle from "./FriendsTitle";
 import FriendsList from "./FriendsList/FriendsList";
import PindingInvitationList from "./PindingInvitationList/PindingInvitationList";
const MainContainer = styled('div')({
width:'224px',
height:'100%',
display:"flex",
flexDirection:"column",
alignItems:"center",
backgroundColor:'#E2E2E2',

});
const FriendsSideBar = () => {
    return <MainContainer>
        <AddFriendButton/>
        <FriendsTitle title='Private Messages'/>
        <FriendsList/>
        <FriendsTitle title='Invitations'/>
        <PindingInvitationList/>
    </MainContainer>
};
export default FriendsSideBar;  