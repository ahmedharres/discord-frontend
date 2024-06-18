import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import backgroundImage from './assets/images/background2.jpg';





const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingLeft: '50px',
    boxSizing: 'border-box',
    position: 'relative',
    overflow: 'hidden',
});

const AuthBox = (props) => {
    return (
        <div>
            <BoxWrapper>
                <Box
                    sx={{
                        width: 350,
                        height: 450,
                        bgcolor: 'white',
                        borderRadius: '15px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 /20%)',
                        display: 'flex',
                        alignItems: 'center',
                        alignContent: 'center',
                        flexDirection: 'column',
                        boxSizing: 'border-box',
                        padding: '25px',
                    }}
                >
                    {props.children}
                </Box>
            </BoxWrapper>
        </div>
    );
};

export default AuthBox;
