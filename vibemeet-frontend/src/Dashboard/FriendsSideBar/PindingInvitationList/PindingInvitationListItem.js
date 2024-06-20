import React, { useState } from "react";
import { Tooltip, Typography, Box } from "@mui/material";
import Avatar from "../../../shared/components/Avatar";
import InvitationDecisionButtons from './InvitationDecisionButtons';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/friendesAction';
const PindingInvitationListItem = ({
    id,
    username,
    mail,
    acceptFriendInvitation = () => { },
    rejectFriendInvitation = () => { },
}) => {

    const [buttonDisabled, setButtonsDisabled] = useState(false);

    const handelAcceptInvitation = () => {
        console.log(id);
        acceptFriendInvitation({ id });
        setButtonsDisabled(true);
    }

    const handelRejectInvitation = () => {
        rejectFriendInvitation({ id });
        setButtonsDisabled(true);
    }
    return <Tooltip title={mail}>
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    width: '100%',
                    height: '42px',
                    marginTop: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Avatar username={username} />
                <Typography
                    sx={{
                        marginLeft: '7px',
                        fontWeight: 700,
                        color: '#8e9297',
                        flexGrow: 1,
                    }}
                    variant="subtitle1"

                >{username}</Typography>
                <InvitationDecisionButtons
                    disabled={buttonDisabled}
                    accptInvitationHandler={handelAcceptInvitation}
                    rejectInvitationHandler={handelRejectInvitation}
                />
            </Box>

        </div>
    </Tooltip>;
}

const mapActionsToProps = (dispatch) =>{
    return{
        ...getActions(dispatch),
    }
}
export default connect(null,mapActionsToProps)(PindingInvitationListItem);