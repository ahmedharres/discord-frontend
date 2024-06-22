import React from 'react';
import { styled } from '@mui/system';
import Avatar from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';

const MainContainer = styled('div')({
    width: '97%',
    display: 'flex',
    marginTop: '10px',
});

const AvatarContainer = styled('div')({
    width: '70px',
});

const MessageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

const MessageContent = styled('div')({
    color: 'black',
    backgroundColor: '#B3B3B3 ',
    borderRadius: '5px',
    overflow: 'auto',
    padding: '10px',
   

});

const SameAuthorMessageContent = styled('div')({
    color: 'black',
    overflow: 'auto',
    backgroundColor: '#B3B3B3 ',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block',
    marginLeft: '70px',
    marginTop:'5px',

});

const SameAuthorMessageText = styled('span')({
 });

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
    if (sameAuthor && sameDay) {
        return (
            <SameAuthorMessageContent>
                <SameAuthorMessageText>{content}</SameAuthorMessageText>
            </SameAuthorMessageContent>
        );
    }

    return (
        <MainContainer>
            <AvatarContainer>
                <Avatar username={username} />
            </AvatarContainer>
            <MessageContainer>
                <Typography style={{ fontSize: "18px", color: "black" }}>
                    {username}{" "}
                    <span style={{ fontSize: "12px", color: "#72767d" }}>{date}</span>
                </Typography>
                <MessageContent>{content}</MessageContent>
            </MessageContainer>
        </MainContainer>
    );

};

export default Message;
