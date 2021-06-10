import { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import SchoolIcon from '@material-ui/icons/School';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';

const PersonalGeneral = () => {
    const classes = useStyles();
    const user = useSelector((state) => state.studentInfo);

    // const user = JSON.parse(localStorage.getItem('user'));


    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FontDownloadIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Full name' secondaryTypographyProps={{
                    style: {
                        color: '#3f51b5'
                    }
                }} secondary={user?.full_name ? user.full_name : 'Tran Trong Thuc'} style={{ color: '#f44336' }} />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Room' secondaryTypographyProps={{
                    style: {
                        color: '#3f51b5'
                    }
                }} secondary={user?.room?.dorm_ID ? user.room.dorm_ID : 'Not found'} style={{ color: '#f44336' }} />
            </ListItem>
        </List>
    )
}

export default PersonalGeneral;