import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EmailIcon from '@material-ui/icons/Email';
import HotelIcon from '@material-ui/icons/Hotel';

import { useHistory } from 'react-router-dom';

export const MainListItems = () => {
  const history = useHistory();
  return (<div>
    <ListItem button onClick={() => {
      history.push('/');
    }}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => {
      history.push('/me/account');
    }}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="My Account" />
    </ListItem>
    <ListItem button onClick={() => {
      history.push('/me/profile');
    }}>
      <ListItemIcon>
        <AccountBoxIcon />
      </ListItemIcon>
      <ListItemText primary="My Profile" />
    </ListItem>
    <ListItem button onClick={() => {
      history.push('/new/student/account');
    }}>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="New Student" />
    </ListItem>
    <ListItem button onClick={() => {
      history.push('/room');
    }}>
      <ListItemIcon>
        <HotelIcon />
      </ListItemIcon>
      <ListItemText primary="Room Arrangement" />
    </ListItem>
    <ListItem button onClick={() => {
      localStorage.clear();
      history.push('/');
    }}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log out" />
    </ListItem>
  </div>)
};


export const SecondaryListItems = () => {
  const history = useHistory();

  return (
    <div>
      <ListSubheader inset>Other tools</ListSubheader>
      <ListItem button onClick={() => {
        history.push('/email/html');
      }}>
        <ListItemIcon>
          <EmailIcon />
        </ListItemIcon>
        <ListItemText primary="HTML Email" />
      </ListItem>
      <ListItem button onClick={() => {
        history.push('/email/subcriptions');
      }}>
        <ListItemIcon>
          <SubscriptionsIcon />
        </ListItemIcon>
        <ListItemText primary="Email Subcriptions" />
      </ListItem>
    </div>)
};