import React from "react";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const CloseRoomButton = () => {
    const handleLeaveRoom = () => {
    }

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleLeaveRoom}>
            <CloseIcon />
        </IconButton>
    )
}


export default CloseRoomButton;