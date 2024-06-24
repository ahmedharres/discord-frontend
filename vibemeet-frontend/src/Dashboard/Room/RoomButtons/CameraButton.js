import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import VideoCamIcon from '@mui/icons-material/Videocam';
import VideoCamOffIcon from '@mui/icons-material/VideocamOff';
const CameraButton = () => {

    const [cameraEnabled, setCameraEnabled] = useState(true);

    const handleToggelCamera = () => {
        setCameraEnabled(!cameraEnabled);
    }

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleToggelCamera}>
            {cameraEnabled ? <VideoCamIcon />
                : <VideoCamOffIcon />}
        </IconButton>
    )
}


export default CameraButton;