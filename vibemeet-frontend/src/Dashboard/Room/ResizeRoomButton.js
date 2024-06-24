import React from "react";
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenFullIcon from '@mui/icons-material/OpenInFull';

const MainContainer = styled('div')({
    position: "absolute",
    bottom: "0px",
    right: "10px",

})

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
    return (
        <MainContainer>
            <IconButton
                style={{ color: 'white' }}
                onClick={handleRoomResize} >
                {isRoomMinimized ? <OpenFullIcon /> : <CloseFullScreenIcon />}
            </IconButton>
        </MainContainer>
    )
}

export default ResizeRoomButton;
