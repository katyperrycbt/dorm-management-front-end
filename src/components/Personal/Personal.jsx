import { useState, useEffect } from 'react';
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
import { getStudentInfo } from '../../actions/student.info'
import { SET_SNACK, SET_LINEAR } from '../../constants/constants';
import {useDispatch, useSelector} from 'react-redux';

const Personal = () => {
    const classes = useStyles();
    const [toggle, setToggle] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Loading...'
            }
        });
        dispatch(getStudentInfo()).then((rs) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Done!'
                }
            });
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }, [dispatch]);

    const profile = useSelector((state) => state.studentInfo);
    
    const icon1 = [LocationOnIcon, LocationOnIcon, LocationOnIcon, EmailIcon, PhoneIcon];
    const content1 = {
        'Province/City': profile?.residentinfo?.province ? profile.residentinfo.province : 'Ho Chi Minh City',
        'District': profile?.residentinfo?.district ? profile.residentinfo.district : 'Thu Duc',
        'Ward': profile?.residentinfo?.ward ? profile.residentinfo.ward : 'Linh Trung',
        'Email': profile?.email ? profile.email : 'katyperrycbt@gmail.com',
        'Tel': profile?.residentinfo?.phone ? profile.residentinfo.phone : '0123456789'
    }

    const icon2 = [ContactPhoneIcon, HomeIcon, PhoneIcon];
    const content2 = {
        'Contact Name': profile?.parentinfo?.name ? profile.parentinfo.name : 'Mr. A',
        'Address': profile?.parentinfo?.address ? profile.parentinfo.address : 'Thu Duc',
        'Contact Phone Number': profile?.parentinfo?.tel ? profile.parentinfo.tel : '0987654321',
    }

    const icon3 = [SecurityIcon, CalendarTodayIcon, ArrowForwardIosIcon, ArrowBackIosIcon];
    const content3 = {
        'Health Insurance Number': profile?.insurance?.id ? profile?.insurance?.id : 'SV15486645648654654',
        'Date of Issue': profile?.insurance?.dateofissue ? profile?.insurance?.dateofissue : '05/05/2020',
        'Valid from':  profile?.insurance?.validfrom ? profile?.insurance?.validfrom : '05/08/2020',
        'Valid to':  profile?.insurance?.validto ? profile?.insurance?.validto : '05/08/2021'
    }

    const iter = {
        'Identity': profile?.identity_card ? profile.identity_card : '321744444',
        'Date of Birth': profile?.dob ? profile.dob : 'September 1st, 2000',
        'Gender': profile?.gender ? profile.gender : 'Male',
        'Academic year': profile?.academic_year ? profile.academic_year : '3',
        'Field of Major': profile?.field_of_major ? profile.field_of_major : 'Computer Science',
        'Folk': profile?.folk ? profile.folk : 'Kinh',
        'Religion': profile?.religion ? profile.religion : 'None',
        'Country': profile?.country ? profile.country : 'Vietnam'
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
                <Grid item md={4} sm={10} xs={12} style={{ margin: '20px 0px 0px 0px', padding: 0 }}>
                    <InfoGeneral toggle={toggle} setToggle={setToggle} />
                </Grid>
                <Grid item md={4} sm={1} xs={false} />
                {
                    toggle === 0 && <Grid item xs={12} style={{ margin: 0, padding: 0 }}>
                        <InfoInfo iter={iter}/>
                    </Grid>
                }
                {
                    toggle === 1 && <Grid item xs={12}>
                        <Contact header='Accommodation Information' content={content1} icon={icon1} />
                        <Contact header='Contact Information' content={content2} icon={icon2}/>
                        <Contact header='Insurance Information' content={content3} icon={icon3}/>
                    </Grid>
                }
            </Grid>
        </div>
    )
}

export default Personal;