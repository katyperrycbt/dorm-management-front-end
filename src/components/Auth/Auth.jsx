import { useState } from 'react';

import { Avatar, Button, Paper, Grid, Typography, Container, CircularProgress, Tooltip } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';
import Input from './Input';
// import Icon from './icon';
// import { signin, signup } from '../../actions/auth';
import dotenv from 'dotenv';

// import ModalNotification from '../ModalNotification/ModalNotification';

dotenv.config();

const inititalState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Auth = (props) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(inititalState);
    // const dispatch = useDispatch();
    const history = useHistory();
    const [progress, setProgress] = useState(false);
    const [errors, setErrors] = useState(undefined);
    const [success, setSuccess] = useState(undefined);
    const { setLinear } = props;
    // const noti = useSelector((state) => {
    //     if (state.noti.noti.length) {
    //         return state.noti.noti.filter((no) => no.link === '/auth')
    //     }
    //     return [];
    // });

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrors(false);
    };


    return (
        <Container component="main" maxWidth="xs" style={{
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
        }}>
            {
                <Snackbar open={(errors !== undefined || success !== undefined)} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={errors ? 'error' : 'success'}>
                        {errors?.message || success?.message}
                    </Alert>
                </Snackbar>
            }
            {/* {
                noti.length ? <ModalNotification noti={noti} /> : <></>
            } */}

            <Paper className={classes.paper} elevation={3}>
                {
                    progress ? <CircularProgress /> : (
                        <>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography variant="h5">Sign in</Typography>
                            <form className={classes.form} onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                                </Grid>
                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                    Sign in
                                </Button>
                                <Grid container justify="flex-end">
                                    <Grid item>
                                        <Tooltip title="Assume that you are already logged in!">
                                            <Button color="secondary" variant="outlined" 
                                            onClick={()=> {localStorage.setItem('iu-student', JSON.stringify({hello: 'yes'})); history.push('/')}}>
                                               Assume that logged in successfully, NEXT here!
                                            </Button>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </form>
                        </>
                    )
                }
            </Paper>
        </Container>
    )
}

export default Auth;
