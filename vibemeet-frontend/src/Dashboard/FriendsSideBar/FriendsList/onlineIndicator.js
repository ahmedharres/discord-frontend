import React from "react";
import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';  

const onlineIndicator = () => {  
    return (
        <Box sx={{
            color: '#3ba55d',
            position: 'absolute',
            alignItems: 'center',
            display: 'flex',
            right: '10px',
        }}>
            <FiberManualRecordIcon  style={{ fontSize: 14 }}/>
        </Box>
    );
}

export default onlineIndicator;  
