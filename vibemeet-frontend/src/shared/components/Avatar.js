import React from "react";
import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
    height: '42px',
    width: '42px',
    backgroundColor: '#1F7DFF',
    borderRadius: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '700',
    marginLeft: '5px',
    color: 'white',
});

const Avatar = ({ username, large }) => {
    return (
        <AvatarPreview style={large ? { height: '800px', width: '800px' } : {}}>
            {typeof username === 'string' ? username.substring(0, 2) : ""}
        </AvatarPreview>
    );
}

export default Avatar;
