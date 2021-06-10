import { useState, useEffect } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
    Accordion, AccordionDetails, AccordionSummary, Button, TextField
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getAdminAccount, editAdminAccount } from '../../../actions/admin.account';
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

const initForm = { oldPassword: '', newPassword: '', reEnterNewPassword: '' };

const Account = ({ open }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [formData, setFormData] = useState(initForm);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        //get update 
        dispatch(getAdminAccount()).then((rs) => {
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
                        msg: 'Done!'
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
        });
    }, [dispatch]);

    const user = useSelector((state) => state.adminAccount);

    console.log('admin account', user);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        if (formData.newPassword !== formData.reEnterNewPassword) {
            return setError(3);
        } else {
            dispatch({ type: SET_LINEAR, data: true });
            dispatch(editAdminAccount(formData)).then((rs) => {
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
                            msg: 'Password Changed!'
                        }
                    });
                }
            }).catch((err) => {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: err.message
                    }
                })
            });
        }
    }

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>My Account</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Because your role is very important in ensuring data integrity. Sign out as soon as you're done, and change your password often.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography className={classes.heading}>Username</Typography>
                                <Typography className={classes.secondaryHeading}>{user.email}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ color: '#f44336' }}>
                                    Note that, username is your email name and email is fixed.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                            >
                                <Typography className={classes.heading} align='left'>Password</Typography>
                                <Typography className={classes.secondaryHeading}>
                                    ••••••••••••
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ color: '#3f51b5' }}>
                                    Change password <span style={{ color: '#f44336', cursor: 'pointer' }} onClick={() => { setChangePassword(true); setExpanded('panel4') }}><u>here</u></span>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                            >
                                <Typography className={classes.heading}>Email</Typography>
                                <Typography className={classes.secondaryHeading}>
                                    {user.email}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography style={{ color: '#f44336' }}>
                                    Email is unchangeable
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        {
                            changePassword && <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography className={classes.heading}>Change password</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container spacing={1}>
                                            <Grid item md={4} xs={12}>
                                                <Typography align="center">
                                                    Please enter the old password correctly and enter the new password twice.
                                            </Typography>
                                            </Grid>
                                            <Grid item md={4} xs={12}>
                                                <TextField
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                                    name='oldPassword'
                                                    helperText={error === 1 ? "Incorrect old password" : ''}
                                                    error={error === 1}
                                                    fullWidth
                                                    required
                                                    type='password'
                                                    placeholder='Old password' />
                                                <TextField
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                                    name='newPassword'
                                                    helperText={error === 2 ? "New password and re-entered password are not match" : ''}
                                                    error={error === 2}
                                                    fullWidth
                                                    required
                                                    type='password'
                                                    placeholder='New password' />
                                                <TextField
                                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                                    name='reEnterNewPassword'
                                                    helperText={error === 3 ? "New password and re-entered password are not match" : ''}
                                                    error={error === 3}
                                                    fullWidth
                                                    required
                                                    type='password'
                                                    placeholder='Re-enter password' />
                                            </Grid>
                                            <Grid item md={4} xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Button type='submit' color='secondary' variant='outlined'>Submit</Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </AccordionDetails>
                            </Accordion>
                        }
                    </Paper>
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

export default Account;