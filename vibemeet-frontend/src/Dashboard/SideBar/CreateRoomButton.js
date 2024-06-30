import React from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add'
import * as roomHandler from '../../realtimeCommunication/roomHandler';
const CreateRoomButton = ({ isUserInRoom }) => {
    const CreateNewRoomHandler = () => {
        roomHandler.createNewRoom();

    };
    return (
        <Button
            disabled={isUserInRoom}
            onClick={CreateNewRoomHandler}
            style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                margin: 0,
                padding: 0,
                minWidth: 0,
                marginTop: '10px',
                color: "white",
            }}
        >
            <AddIcon />
        </Button>
    );
};

export default CreateRoomButton;