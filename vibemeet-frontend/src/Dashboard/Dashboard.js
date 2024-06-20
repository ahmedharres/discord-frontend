import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import SideBar from "./SideBar/SideBar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../shared/utiles/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import backgroundImage from '../shared/components/assets/images/background2.jpg';
import { connectWithSocketServer } from "../realtimeCommunication/socketConnection";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundImage: `url(${backgroundImage})`,
});

const Dashboard = ({ setUserDetails }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const userDetails = localStorage.getItem("user");

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      setAuthenticated(true);

      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [setUserDetails]);

  if (!authenticated) {
    return null;
  }

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
