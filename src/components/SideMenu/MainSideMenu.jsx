import React from "react";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Typography } from "@material-ui/core";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import LocalHotelOutlinedIcon from "@material-ui/icons/LocalHotelOutlined";
import ConfirmationNumberOutlinedIcon from "@material-ui/icons/ConfirmationNumberOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";
import NotificationImportantOutlinedIcon from "@material-ui/icons/NotificationImportantOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import Tooltip from "@material-ui/core/Tooltip";

import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import "./index.css";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function SwipeableTemporaryDrawer({ sideMenu, setSideMenu }) {
  const classes = useStyles();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const history = useHistory();

  const handleClose = (e) => {
    setSideMenu(false);
  };

  const handleOpen = () => {
    setSideMenu(true);
  };

  const handleAction1 = (e) => () => {
    switch (e) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/info");
        break;
      case 2:
        history.push("/resident");
        break;
      case 3:
        history.push("/bills");
        break;
      case 4:
        history.push("/requests");
        break;
      case 5:
        history.push("/notifications");
        break;
      default:
        localStorage.clear();
        history.push("/");
        break;
    }
    handleClose();
    return <></>;
  };

  const handleAction2 = (e) => () => {
    switch (e) {
      case 1:
        history.push("/about");
        break;
      case 2:
        history.push("/contact");
        break;
      case 0:
        history.push("/account");
        break;
      default:
        break;
    }
    handleClose();
    return <></>;
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <List style={{ padding: "10px 20px 10px 20px" }}>
        <Typography variant="h4" style={{ color: '#3f51b5' }}>IU's Dormitory</Typography>
        <Typography variant="subtitle1" style={{ color: '#f44336' }}>v4.16.2021</Typography>
        <img src="bunk-bed512.png" alt="img" width={100} height={100} />
      </List>
      <Divider />
      <List>
        {[
          "Home page",
          "Personal information",
          "Resident information",
          "Bills",
          "Request",
          "Notifications",
          "Log out",
        ].map((text, index) => (
          <ListItem button key={text} onClick={handleAction1(index)}>
            <ListItemIcon>
              {index === 0 && <HomeOutlinedIcon />}
              {index === 1 && <PermIdentityOutlinedIcon />}
              {index === 2 && <LocalHotelOutlinedIcon />}
              {index === 3 && <ConfirmationNumberOutlinedIcon />}
              {index === 4 && <ContactSupportOutlinedIcon />}
              {index === 5 && <NotificationImportantOutlinedIcon />}
              {index === 6 && <ExitToAppOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Change Password","About", "Contact"].map((text, index) => (
          <ListItem button key={text} onClick={handleAction2(index)}>
            <ListItemIcon>
              {index === 0 && <LockOutlinedIcon />}
              {index === 1 && <InfoOutlinedIcon />}
              {index === 2 && <CallOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List style={{ padding: "5px 10px 5px 10px" }}>
        <Typography variant="h6" style={{ color: '#f44336' }}>IU Dormitory</Typography>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Property of PASS</Typography>
              {
                "This website is owned by team PASS (International University), designed by"
              }{" "}
              <b>PASS</b>
            </React.Fragment>
          }
        >
          <Typography variant="body1" style={{ color: '#3f51b5' }}>
            Copyright &copy; 2021 Team PASS of the International University Ho
            Chi Minh City. All rights reserved.
          </Typography>
        </HtmlTooltip>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="left">
        <SwipeableDrawer
          anchor={"left"}
          open={sideMenu}
          onClose={handleClose}
          onOpen={handleOpen}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
        >
          {list("top")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
