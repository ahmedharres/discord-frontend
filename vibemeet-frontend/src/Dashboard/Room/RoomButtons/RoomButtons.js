import React from "react";
import { styled } from '@mui/system';
import CameraButton from "./CameraButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import ScreenShareButton from "./ScreenShareButton";

const MainContainer = styled('div')({
    height: '15%',
    width: '100%',
    backgroundColor: '#696969  ',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const RoomButtons = () => {
    return (
        <MainContainer>
            <MicButton /> 
            <CameraButton />
            <ScreenShareButton />
            <CloseRoomButton />
        </MainContainer>
    )
}

export default RoomButtons;
