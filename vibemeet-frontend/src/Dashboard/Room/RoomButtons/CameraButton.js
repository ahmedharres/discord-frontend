import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import VideoCamIcon from '@mui/icons-material/Videocam';
import VideoCamOffIcon from '@mui/icons-material/VideocamOff';

const CameraButton = ({ localStream }) => {
    const [cameraEnabled, setCameraEnabled] = useState(true);

    useEffect(() => {
        // Log the localStream to ensure it's correct
        console.log("localStream in CameraButton:", localStream);
    }, [localStream]);

    const handleToggleCamera = () => {
        if (localStream && localStream.getVideoTracks) {
            const videoTracks = localStream.getVideoTracks();
            if (videoTracks.length > 0) {
                videoTracks[0].enabled = !cameraEnabled;
                setCameraEnabled(!cameraEnabled);
            } else {
                console.error("No video tracks found in localStream");
            }
        } else {
            console.error("localStream is not a valid MediaStream object");
        }
    };

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleToggleCamera}>
            {cameraEnabled ? <VideoCamIcon /> : <VideoCamOffIcon />}
        </IconButton>
    );
};

export default CameraButton;
