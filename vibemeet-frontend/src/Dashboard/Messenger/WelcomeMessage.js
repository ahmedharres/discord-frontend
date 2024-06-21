import React from "react";
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const Wrapper = styled('div')({
    flexGrow: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const WelcomMessage = () => {
    return (
        <Wrapper>
            <Typography
                variant="h6"
                sx={{ color: '#4d5155', fontWeight: 800, fontSize: '30' }}
            >
                To start chatting - choose a chat
            </Typography>
        </Wrapper>
    );
};

export default WelcomMessage;
