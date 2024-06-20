import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

const InvitationDecisionButtons = ({ disabled, accptInvitationHandler, rejectInvitationHandler }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton
                style={{ color: 'green'}}
                disabled={disabled}
                onClick={accptInvitationHandler}
            >
                <CheckIcon />
            </IconButton>
            <IconButton
                style={{ color: 'red'}}
                disabled={disabled}
                onClick={rejectInvitationHandler}
            >
                <ClearIcon />
            </IconButton>
        </Box>
    );
}

export default InvitationDecisionButtons;
