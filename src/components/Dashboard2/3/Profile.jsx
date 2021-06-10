import { useState, useEffect } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
    Accordion, AccordionDetails, AccordionSummary, TextField
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getAdminInfo, editAdminInfo } from '../../../actions/admin.info';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#3f51b5' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/thuc.katy" style={{ color: '#f44336' }}>
                IU Dormitory
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const initForm = { name: '', gender: '', tel: '' };

const Profile = ({ open }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [formData, setFormData] = useState(initForm);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch(getAdminInfo()).then(() => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Done!'
                }
            })
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        });
    }, [dispatch]);

    const user = useSelector((state) => state.adminInfo);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSubmit = () => {

        dispatch({ type: SET_LINEAR, data: true });
        dispatch(editAdminInfo(formData)).then((rs) => {
            console.log(rs);
            if (rs.message) {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: rs.message
                    }
                })
            } else {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Info Changed!'
                    }
                })
            }
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }

    const handleEnter = (e) => {

        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>My Profile</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Including basic information, like name and gender, is how you present it in the system.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <form onSubmit={handleSubmit}>
                        <Paper>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>Name</Typography>
                                    <Typography className={classes.secondaryHeading}>{user.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: '#3f51b5' }}>
                                        Change name here
                                    </Typography>
                                    <TextField type='text' fullWidth placeholder='New name' name='name'
                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                        onKeyDown={handleEnter}
                                    />
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className={classes.heading} align='left'>Gender</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        {user.gender}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: '#3f51b5' }}>
                                        Change gender here
                                    </Typography>
                                    <TextField type='text' fullWidth placeholder='New gender' name='gender'
                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                        onKeyDown={handleEnter}
                                    />
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className={classes.heading}>Tel</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        {user.tel}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography style={{ color: '#3f51b5' }}>
                                        Change tel here
                                    </Typography>
                                    <TextField type='text' fullWidth placeholder='New tetephone' name='tel'
                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                        onKeyDown={handleEnter}
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    </form>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            Why can't I change my email or username?
                        </Typography>
                        <Typography>
                            Email or username is the fastest way to identify admin activity, so it is fixed.
                        </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            Got confused in naming your email or username?
                        </Typography>
                        <Typography>
                            Contact your manager to review this special case.
                        </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            If I forget my password in the future, is there a way to get it back?
                        </Typography>
                        <Typography>
                            Click the 'forgot password' button at the login screen, you will receive a password recovery email.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    </main>
}

export default Profile;