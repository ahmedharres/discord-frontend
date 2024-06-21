import React from "react";
import { styled } from '@mui/system';
import Avatar from '../../../shared/components/Avatar';
import Typography from '@mui/material/Typography';

const MainContainer = styled('div')({
    width: '100%',  
    display: 'flex', 
    flexDirection: 'column',  
    alignItems: 'center',  
    marginTop: '10px', 
});

const MessagesHeader = ({ name = " " }) => {
    return (
        <MainContainer>
            <Avatar large username={name} />
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: '#4d5155',
                    marginLeft: '5px',
                    marginRight: '5px',
                    textAlign: 'center',
                    fontSize:'24px'  
                }}
            >
                This is the beginning of chat with {name}
            </Typography>
        </MainContainer>
    );
};

export default MessagesHeader;
