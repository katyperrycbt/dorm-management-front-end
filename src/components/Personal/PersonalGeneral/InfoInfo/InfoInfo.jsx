import FingerprintIcon from '@material-ui/icons/Fingerprint';
import CakeIcon from '@material-ui/icons/Cake';
import WcIcon from '@material-ui/icons/Wc';
import GradeIcon from '@material-ui/icons/Grade';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ExploreIcon from '@material-ui/icons/Explore';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LanguageIcon from '@material-ui/icons/Language';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const InfoInfo = () => {
    const classes = useStyles();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!user) {
        history.push('/');
        return <></>
    }

    const iconIter = [FingerprintIcon, CakeIcon, WcIcon, GradeIcon, BusinessCenterIcon,
        ExploreIcon, FilterVintageIcon, LanguageIcon];

    const iter = {
        'Citizen Identification Number': user.info?.name ? user.info.name : 'Tran Trong Thuc',
        'Date of Birth': user.info?.dob ? user.info.dob : 'September 1st, 2000',
        'Gender': user.info?.sex ? user.info.sex : 'Male',
        'Being in n\'th year': user.info?.grade ? user.info.grade : '3',
        'Field of Major': user.info?.field ? user.info.field : 'Computer Science',
        'Folk': user.info?.folk ? user.info.folk : 'Kinh',
        'Religion': user.info?.religion ? user.info.religion : 'None',
        'Country': user.info?.country ? user.info.country : 'Vietnam'
    }

    const IterDraw = () => {
        return <>
            {
                Object.keys(iter).map((key, index) => {
                    const NowIcon = iconIter[index];
                    return (
                        <Grid container key={`g${index}`}>
                            <Grid item xs={12} className={classes.space} >' '</Grid>
                            <Grid item md={3} sm={2} />
                            <Grid item md={3} sm={4} xs={12} className={classes.root2}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <NowIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText secondary={key} />
                                </ListItem>
                            </Grid>
                            <Grid item md={3} sm={4} xs={12} className={classes.root3}>
                                <ListItem className={classes.root6}>
                                    <ListItemText primary={iter[key]} />
                                </ListItem>
                            </Grid>
                            <Grid item md={3} sm={2} />

                        </Grid>
                    )
                })
            }
        </>
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <IterDraw />
            </Grid>
        </div>
    )
}

export default InfoInfo;