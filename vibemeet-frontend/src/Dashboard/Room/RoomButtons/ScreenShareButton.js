import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import ScreenShareOffIcon from '@mui/icons-material/StopScreenShare';
const ScreenShareButton = () => {

    const [isScreenShareingActive, setIsScreenShareingActive] = useState(true);

    const handleToggelScreenShare = () => {
        setIsScreenShareingActive(!isScreenShareingActive);
    }

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleToggelScreenShare}>
            {isScreenShareingActive ? <ScreenShareIcon />
                : <ScreenShareOffIcon />}
        </IconButton>
    )
}


export default ScreenShareButton;