import React from 'react'

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";



const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
    color:#f56368;
    font-size:24px;
    margin-left:25px
`;

const HeaderBar = ({open, handleDrawer}) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{ marginRight: "20px" }}
      >
        <MenuIcon />
      </IconButton>
      <img src={logo} alt="" style={{width:30}}></img>
      <Heading>Keep</Heading>
    </Toolbar>
  </Header>
  )
}

export default HeaderBar
