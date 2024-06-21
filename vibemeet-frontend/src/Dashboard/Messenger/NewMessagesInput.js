import React, { useState } from "react";
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../realtimeCommunication/socketConnection';

const MainContainer = styled('div')({
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const Input = styled('input')({
    backgroundColor: '#E2E2E2',
    width: '98%',
    height: '44px',
    color: '#black',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    padding: '0 10px',
    '::placeholder': {
        color: '#7f7f7f',
        opacity: 1,
    },
});

const NewMessagesInput = ({ chosenChatDetails }) => {
    const [message, setMessage] = useState('');

    const handleMessageValueChange = (event) => {
        setMessage(event.target.value);
    }

    const handleKeyPressed = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    }

    const handleSendMessage = () => {
 
        if (message.length > 0) {
            sendDirectMessage({
                receiverUserId: chosenChatDetails.id,
                content: message,
            });
            setMessage("");

        }
    }

    return (
        <MainContainer>
            <Input
                placeholder={`write message to ${chosenChatDetails.name}`}
                value={message}
                onChange={handleMessageValueChange}
                onKeyDown={handleKeyPressed}
            />
        </MainContainer>
    );
};

const mapStoreStateToProps = ({ chat }) => {
    return {
        chosenChatDetails: chat.chosenChatDetails
    }
}

export default connect(mapStoreStateToProps)(NewMessagesInput);
