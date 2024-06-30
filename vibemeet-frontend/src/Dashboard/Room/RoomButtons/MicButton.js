import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

const MicButton = ({ localStream }) => {
    const [micEnabled, setMicEnabled] = useState(true);

    useEffect(() => {
        // Log the localStream to ensure it's correct
        console.log("localStream in MicButton:", localStream);
    }, [localStream]);

    const handleToggleMic = () => {
        if (localStream && localStream.getAudioTracks) {
            const audioTracks = localStream.getAudioTracks();
            if (audioTracks.length > 0) {
                audioTracks[0].enabled = !micEnabled;
                setMicEnabled(!micEnabled);
                console.log(`Microphone ${!micEnabled ? 'enabled' : 'disabled'}`);
            } else {
                console.error("No audio tracks found in localStream");
            }
        } else {
            console.error("localStream is not a valid MediaStream object");
        }
    };

    return (
        <IconButton sx={{ color: 'white' }} onClick={handleToggleMic}>
            {micEnabled ? <MicIcon /> : <MicOffIcon />}
        </IconButton>
    );
};

export default MicButton;
