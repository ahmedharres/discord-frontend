import React from "react";
import { styled } from '@mui/material';
import DropdwonMenu from './Dropdwonmenu'
import ChosenOptionLabel from './ChosenOptionLabel';

const MainContainer = styled('div')({
    position:"absolute",
    right:'0',
    top:'0',
    height:'48px',
    background:'#1F7DFF',
    width:'calc(100% - 332px)',
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    padding:'0 15px'
});
const AppBar = () => {
    return <MainContainer>
        <ChosenOptionLabel/>
        <DropdwonMenu/>
    </MainContainer>
};
export default AppBar;  