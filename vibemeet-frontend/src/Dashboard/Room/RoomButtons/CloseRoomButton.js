import React from "react";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as roomhandler from '../../../realtimeCommunication/roomHandler';
 
const CloseRoomButton = () => {
    const handleLeaveRoom = () => {
        roomhandler.leaveRoom();
    }

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleLeaveRoom}>
            <CloseIcon />
        </IconButton>
    )
}


export default CloseRoomButton;