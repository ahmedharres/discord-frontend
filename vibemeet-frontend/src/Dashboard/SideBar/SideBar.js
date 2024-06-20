import React from "react";
import { styled } from '@mui/material';
import MainPageButton from "./MainPageButton";

const MainContainer = styled('div')({
width:'78px',
height:'100%',
display:"flex",
flexDirection:"column",
alignItems:"center",

});
const SideBar = () => {
    return <MainContainer>
        <MainPageButton/>
    </MainContainer>
};
export default SideBar;