import React from "react";
import { styled } from '@mui/system';
import PindingInvitationListItem from './PindingInvitationListItem';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
    width: '100%',
    height: '22%',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto',
});

const PindingInvitationList = ({ pindingFrinedesInvitations }) => {
    return (
        <MainContainer>   
            {pindingFrinedesInvitations && pindingFrinedesInvitations.length > 0 ? (
                pindingFrinedesInvitations.map(invitation => (
                    <PindingInvitationListItem
                        key={invitation._id}
                        id={invitation._id}
                        username={invitation.senderId.username}
                        mail={invitation.senderId.mail}
                    />
                ))
            ) : (
                <p>No pending invitations</p>
            )}
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    };
};

export default connect(mapStoreStateToProps)(PindingInvitationList);
