import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { logout } from "../../shared/utiles/auth";
import { getActions } from "../../store/actions/roomActions";
import { connect } from 'react-redux';

const BasicMenu = ({ audioOnly, setAudioOnly }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleAudioOnlyChange = () => {
        setAudioOnly(!audioOnly);
    }

    return (
        <div>
            <IconButton onClick={handleMenuOpen} style={{ color: "white" }}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                    sx: {
                        padding: 0,
                    },
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        mt: 1.5,
                        "&:before": {
                            display: "none",
                        },
                    },
                }}
            >
                <MenuItem onClick={handleAudioOnlyChange}>
                    {audioOnly ? 'Audio Only Enabled' : 'Audio Only Disabled'}
                </MenuItem>
                <MenuItem
                    onClick={logout}
                    sx={{
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '10px',
                        margin: '4px',
                        '&:hover': {
                            backgroundColor: 'darkred',
                        },
                    }}
                >
                    Logout
                </MenuItem>
            </Menu>
        </div>
    );
}

const mapStoreStateToProps = ({ room }) => {
    return {
        ...room,
    }
}

const mapActionToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}
export default connect(mapStoreStateToProps, mapActionToProps)(BasicMenu);