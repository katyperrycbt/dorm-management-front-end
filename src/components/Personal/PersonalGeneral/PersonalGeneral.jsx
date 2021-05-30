import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import SchoolIcon from '@material-ui/icons/School';
import {useHistory} from 'react-router-dom';

import useStyles from './styles';

const PersonalGeneral = () => {
    const classes = useStyles();
    const history = useHistory();

    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        history.push('/');
        return <></>
    }

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <FontDownloadIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Full name' secondaryTypographyProps={{style: {
                    color: '#3f51b5'
                }}} secondary={user.info?.name ? user.info?.name : 'Tran Trong Thuc'} style={{color: '#f44336'}}/>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <SchoolIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Room' secondaryTypographyProps={{style: {
                    color: '#3f51b5'
                }}} secondary={user.info?.school ? user.info.school : 'B3212'} style={{color: '#f44336'}}/>
            </ListItem>
        </List>
    )
}

export default PersonalGeneral;