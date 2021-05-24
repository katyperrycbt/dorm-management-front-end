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

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import DashboardIcon from "@material-ui/icons/Dashboard";
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

  const admin = !(window.location.href.indexOf("admin.iu-dormitory.fun") === 8);

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
        !admin ? history.push("/info") : history.push("/admins");

        break;
      case 2:
        !admin ? history.push("/resident") : history.push("/dashboard");
        break;
      case 3:
        !admin ? history.push("/bills") : history.push("/login");
        break;
      case 4:
        history.push("/requests");
        break;
      default:
        localStorage.removeItem("iu-student");
        history.push("/");
        break;
    }
    handleClose();
    return <></>;
  };

  const handleAction2 = (e) => () => {
    switch (e) {
      case 0:
        history.push("/about");
        break;
      case 1:
        history.push("/contact");
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
        <Typography variant="h4">IU's Dormitory</Typography>
        <Typography variant="subtitle1">v4.16.2021</Typography>
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
        {["About", "Contact"].map((text, index) => (
          <ListItem button key={text} onClick={handleAction2(index)}>
            <ListItemIcon>
              {index === 0 && <InfoOutlinedIcon />}
              {index === 1 && <CallOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List style={{ padding: "5px 10px 5px 10px" }}>
        <Typography variant="h6">IU Dormitory</Typography>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Property of IU</Typography>
              {
                "This website is owned by team PASS (International University), designed by a team called"
              }{" "}
              <b>KATYPERRYCBT</b>
            </React.Fragment>
          }
        >
          <Typography variant="body1">
            Copyright &copy; 2021 Team PASS of the International University Ho
            Chi Minh City. All rights reserved.
          </Typography>
        </HtmlTooltip>
      </List>
    </div>
  );

  const list2 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <List style={{ padding: "10px 20px 10px 20px" }}>
        <Typography variant="h4">IU's Dormitory</Typography>
        <Typography variant="subtitle1">v4.16.2021</Typography>
        <img src="bunk-bed512.png" alt="img" width={100} height={100} />
      </List>
      <Divider />
      <List>
        {["Home page", "Personal information", "Dashboard", "Log Out"].map(
          (text, index) => (
            <ListItem button key={text} onClick={handleAction1(index)}>
              <ListItemIcon>
                {index === 0 && <HomeOutlinedIcon />}
                {index === 1 && <PermIdentityOutlinedIcon />}
                {index === 2 && <DashboardIcon />}
                {index === 3 && <ExitToAppOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["About"].map((text, index) => (
          <ListItem button key={text} onClick={handleAction2(index)}>
            <ListItemIcon>{index === 0 && <InfoOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List style={{ padding: "5px 10px 5px 10px" }}>
        <Typography variant="h6">IU Dormitory</Typography>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">Property of IU</Typography>
              {
                "This website is owned by team PASS (International University), designed by a team called"
              }{" "}
              <b>KATYPERRYCBT</b>
            </React.Fragment>
          }
        >
          <Typography variant="body1">
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
          {admin ? list2("top") : list("top")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
