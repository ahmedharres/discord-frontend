import React from "react";
import Button from '@mui/material/Button';
import Avatar from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';
import OnlineIndicator from "./onlineIndicator";
import { chatTypes, getActions } from "../../../store/actions/chatActions";

import { connect } from 'react-redux';

const FriendsListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
    const handleChoseActiveConversation = () => {
        setChosenChatDetails({ id: id, name: username }, chatTypes.DIRECT)
    }
    return (
        <Button
            onClick={handleChoseActiveConversation}
            style={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'black',
                position: 'relative',
            }}
        >
            <Avatar username={username} />
            <Typography
                style={{
                    marginLeft: '7px',
                    fontWeight: 700,
                    color: '#4d5155'
                }}
                variant="subtitle1"
                align="left"
            >
                {username}
            </Typography>
            {isOnline && <OnlineIndicator />}
        </Button>
    );
}


const mapActionToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionToProps)(FriendsListItem);