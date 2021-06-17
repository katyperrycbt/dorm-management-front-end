import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import SecurityIcon from '@material-ui/icons/Security';

import { adminSignIn } from '../../actions/admin.auth';
import { studentSignIn } from '../../actions/student.auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SET_SNACK, SET_LINEAR } from '../../constants/constants';
import { sendRecovery, updatePassword } from '../../actions/recovery';

import RequestAccommodation from '../RequestAccommodation/Form';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#3f51b5' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://iu-dormitory.fun/" style={{ color: '#f44036' }}>
                IU Dormitory
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultFormData = { 'email': '', 'password': '' };

export default function Login() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(defaultFormData);
    const [remember, setRemember] = useState(false);
    const [forgotPassword, setForgetPassword] = useState(false);
    const [recoveryEmail, setRecoveryEmail] = useState(false);
    const [requestAccomodation, setRequestAccommodation] = useState(false);
    const [recoveryCode, setRecoveryCode] = useState("");
    const [recoveryMail, setRecoveryMail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [errorReenter, setErrorReenter] = useState(false);
    const [sentCode, setSentCode] = useState(false);

    const history = useHistory();

    const admin = window.location.href.indexOf('admin') === 8 || window.location.href.indexOf('admin') === 7;

    useEffect(() => {
        const temp = window.location.search;
        const params = new URLSearchParams(temp);
        let paramObj = {};
        for (var value of params.keys()) {
            paramObj[value] = params.get(value);
        }
        console.log(paramObj);
        if (paramObj.recovery && paramObj.email) {
            setRecoveryCode(paramObj.recovery);
            setRecoveryMail(paramObj.email);
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({ type: SET_LINEAR, data: true });

        if (admin) {
            dispatch(adminSignIn(formData, remember)).then((rs) => {

                dispatch({ type: SET_LINEAR, data: false });
                if (rs.message) {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: rs.message
                        }
                    });
                } else {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: 'Login successfully!'
                        }
                    });
                    history.push('/');
                }

            }).catch((err) => {
                //send some error noti
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: err.message
                    }
                })
            });

        } else {
            dispatch(studentSignIn(formData, remember)).then((rs) => {

                dispatch({ type: SET_LINEAR, data: false });
                if (rs.message) {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: rs.message
                        }
                    });
                    alert(rs.message)
                } else {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: 'Login successfully!'
                        }
                    })
                    history.push('/');
                }

                //send some noti
            }).catch((err) => {
                //send some error noti
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

    const handleRecovery = (e) => {
        e.preventDefault();

        dispatch({ type: SET_LINEAR, data: true });

        dispatch(sendRecovery(recoveryEmail)).then((rs) => {

            dispatch({ type: SET_LINEAR, data: false });
            if (rs.message) {
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: rs.message
                    }
                });
                console.log(rs.message)
            } else {
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Send successfully!'
                    }
                });
                setRecoveryMail(recoveryEmail);
                setSentCode(true);
            }

            //send some noti
        }).catch((err) => {
            //send some error noti
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        });

    }

    const handleChangePassword = (e) => {
        e.preventDefault();
        dispatch({ type: SET_LINEAR, data: true });

        dispatch(updatePassword({ email: recoveryMail, newPassword: newPassword, code: recoveryCode })).then((rs) => {
            dispatch({ type: SET_LINEAR, data: false });
            console.log('rsrsrs', rs);
            if (rs.message) {
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: rs.message
                    }
                });
            } else {
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Update successfully, please log in again. You are being redirected...'
                    }
                });
                console.log(rs);
                setTimeout(() => {
                    const isLocalHost = window.location.origin.indexOf('localhost') > 0;
                    if (rs.role === 0) {
                        if (isLocalHost) {
                            window.location.href = `http://localhost:${window.location.port}/login`;
                        } else {
                            window.location.href = `https://iu-dormitory.fun/login`;
                        }
                    } else {
                        if (isLocalHost) {
                            window.location.href = `http://admin.localhost:${window.location.port}/login`;
                        } else {
                            window.location.href = `https://admin.iu-dormitory.fun/login`;
                        }
                    }
                }, 1500);
            }

        }).catch((err) => {
            //send some error noti
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        });
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <RequestAccommodation open={requestAccomodation} setOpen={setRequestAccommodation} />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square classes={{ root: classes.custom }}>
                <div className={classes.paper}>
                    {
                        (!forgotPassword && !recoveryCode && !recoveryMail) && <>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{ color: '#3f51b5' }}>
                                Sign in
                            </Typography>
                            <form className={classes.form} onSubmit={handleLogin}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    type="email"
                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" onChange={(e) => setRemember((old) => !old)} />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link component="button" onClick={(e) => { e.preventDefault(); setForgetPassword(old => !old) }} variant="body2" style={{ color: '#3f51b5' }}>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link component="button" onClick={(e) => { e.preventDefault(); setRequestAccommodation(old => !old) }} variant="body2" style={{ color: '#3f51b5' }}>
                                            {"Not a member yet? Request for accommodation"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </>
                    }
                    {
                        (forgotPassword && !recoveryCode && !recoveryMail) && <>
                            <Avatar className={classes.avatarr}>
                                <SecurityIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{ color: '#3f51b5' }}>
                                Forgot Password
                            </Typography>
                            <Typography variant="body1" style={{ color: '#f44336' }}>
                                Enter your email to get the recovery email
                            </Typography>
                            <form className={classes.form} onSubmit={handleRecovery}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    type="email"
                                    onChange={(e) => setRecoveryEmail(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ backgroundColor: '#357a38' }}
                                    className={classes.submit}
                                >
                                    Send recovery email
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link component="button" onClick={(e) => { e.preventDefault(); setRecoveryCode(""); setRecoveryMail(""); setForgetPassword(old => !old) }} variant="body2" style={{ color: '#3f51b5' }}>
                                            Back to Log In
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link component="button" onClick={(e) => { e.preventDefault(); setRequestAccommodation(old => !old) }} variant="body2" style={{ color: '#3f51b5' }}>
                                            {"Not a member yet? Request for accommodation"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </>
                    }
                    {
                        ((recoveryCode && recoveryMail) || (recoveryMail && sentCode)) && <>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{ color: '#3f51b5' }}>
                                New Password
                            </Typography>
                            <form className={classes.form} onSubmit={handleChangePassword}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="emasssssil"
                                    label="New Password"
                                    name="password"
                                    autoFocus
                                    type="password"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password2"
                                    label="Re-entered Password"
                                    type="password"
                                    id="password2"
                                    onChange={(e) => {
                                        if (e.target.value && e.target.value !== newPassword) {
                                            setErrorReenter(true);
                                        } else {
                                            setErrorReenter(false);
                                        }
                                    }}
                                    error={errorReenter}
                                    helperText={errorReenter === false ? "You are changing your password!" : "New password and reentered password are not match!"}
                                />
                                {
                                    sentCode && <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password22"
                                    label="Code"
                                    type="text"
                                    id="passwordd2"
                                    onChange={(e) => {
                                        setRecoveryCode(e.target.value)
                                    }}
                                    helperText="This code is in your email!"
                                />
                                }
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Update Password
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link component="button" onClick={(e) => { e.preventDefault(); setRecoveryCode(""); setRecoveryMail(""); setForgetPassword(old => !old) }} variant="body2" style={{ color: '#3f51b5' }}>
                                            Back to Log In
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link component="button" onClick={(e) => { e.preventDefault(); setRequestAccommodation(old => !old) }} variant="body2" style={{ color: '#3f51b5' }}>
                                            {"Not a member yet? Request for accommodation"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </>
                    }
                    <Box mt={5}>
                        <Copyright />
                    </Box>

                </div>
            </Grid>
        </Grid>
    );
}