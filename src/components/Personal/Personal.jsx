import { useState } from 'react';
import { Avatar, Grid } from "@material-ui/core";

import PersonalGeneral from './PersonalGeneral/PersonalGeneral';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './styles';

import { useHistory } from 'react-router-dom';

import InfoGeneral from './PersonalGeneral/InfoTab/InfoGeneral';
import InfoInfo from './PersonalGeneral/InfoInfo/InfoInfo';
import Contact from './Contact/Contact';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import HomeIcon from '@material-ui/icons/Home';

import SecurityIcon from '@material-ui/icons/Security';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Personal = () => {
    const classes = useStyles();
    const history = useHistory();
    const [toggle, setToggle] = useState(0);

    const profile = JSON.parse(localStorage.getItem('iu-student'));

    if (!profile) {
        history.push('/');
        return <></>;
    }

    // if (!profile.info) {
    //     profile.info = {};
    // }


    const content1 = {
        'Province/City': [LocationOnIcon, profile.info?.city ? profile.info?.city : 'Ho Chi Minh City'],
        'District': [LocationOnIcon, profile.info?.district ? profile.info?.district : 'Thu Duc'],
        'Ward': [LocationOnIcon, profile.info?.ward ? profile.info?.ward : 'Linh Trung'],
        'Email': [EmailIcon, profile.info?.email ? profile.info?.email : 'katyperrycbt@gmail.com'],
        'Tel': [PhoneIcon, profile.info?.phone ? profile.info?.phone : '0123456789']
    }

    const content2 = {
        'Contact Name': [ContactPhoneIcon, profile.info?.parentName ? profile.info?.parentName : 'Mr. A'],
        'Address': [HomeIcon, profile.info?.parentAddr ? profile.info?.parentAddr : 'Thu Duc'],
        'Contact Phone Number': [PhoneIcon, profile.info?.parentTel ? profile.info?.parentTel : '0987654321'],
    }

    const content3 = {
        'Health Insurance Number': [SecurityIcon, profile.info?.insuranceNum ? profile.info?.insuranceNum : 'SV15486645648654654'],
        'Date of Issue': [CalendarTodayIcon, profile.info?.insuranceIssue ? profile.info?.insuranceIssue : '05/05/2020'],
        'Valid from': [ArrowForwardIosIcon, profile.info?.insuranceFrom ? profile.info?.insuranceFrom : '05/08/2020'],
        'Valid to': [ArrowBackIosIcon, profile.info?.insuranceTo ? profile.info?.insuranceTo : '05/08/2021']
    }

    return (
        <div className={classes.container}>
            <Grid container alignItems="stretch" spacing={3}>
                <Grid item xs={12} className={classes.root3}>
                    <Grid item sm={6} xs={12} className={classes.root4}>
                        <Avatar alt='personal avatar' src={profile.info?.avt ? profile.info?.avt : 'dormitory.png'} className={`${classes.large} ${classes.green}`}>
                            <AccountCircleIcon className={classes.large2} />
                        </Avatar>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.root4}>
                        <PersonalGeneral />
                    </Grid>
                </Grid>
                <Grid item md={4} sm={1} xs={false} />
                <Grid item md={4} sm={10} xs={12}>
                    <InfoGeneral toggle={toggle} setToggle={setToggle} />
                </Grid>
                <Grid item md={4} sm={1} xs={false} />
                {
                    toggle === 0 && <Grid item xs={12}>
                        <InfoInfo />
                    </Grid>
                }
                {
                    toggle === 1 && <Grid item xs={12}>
                        <Contact header='Accommodation Information' content={content1}/>
                        <Contact header='Contact Information' content={content2}/>
                        <Contact header='Insurance Information' content={content3}/>
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default Personal;