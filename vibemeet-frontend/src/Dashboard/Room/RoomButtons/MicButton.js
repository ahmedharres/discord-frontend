import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
const MicButton = () => {

    const [micEnabled, setMicEnabled] = useState(true);

    const handleToggelMic = () => {
        setMicEnabled(!micEnabled);
    }

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleToggelMic}>
            {micEnabled ? <MicIcon />
                : <MicOffIcon />}
        </IconButton>
    )
}


export default MicButton;