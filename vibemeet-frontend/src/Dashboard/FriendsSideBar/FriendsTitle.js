import React from "react";
import { Typography } from '@mui/material';

const FriendsTitle = ({ title }) => {
    return <Typography
        sx={{
            textTransform: 'uppercase',
            color: 'black',
            fontSize: '14px',
            fontWeight: 'bold',
            marginTop: '10px',
 
        }}

    >
        {title}
    </Typography>
};
export default FriendsTitle;  