import { useState } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './styles2';
import { Tooltip, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import SendIcon from '@material-ui/icons/Send';

import { useDispatch } from 'react-redux';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { studentRequestReturn } from '../../../actions/student.request';

import {
    MuiPickersUtilsProvider,
    //   KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    overrides: {
        MuiFormControl: {
            marginNormal: {
                margin: 0,
                marginTop: 0,
                marginBottom: 0
            }
        }
    }
});


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

const ResidentBill = ({ open }) => {
    const classes = useStyles();
    // const [newRequest, setNewRequest] = useState(false);
    const [formData, setFormData] = useState({ reason: '', leavingDate: new Date() });
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Sending...'
            }
        });

        dispatch(studentRequestReturn(formData)).then((rs) => {
            if (rs.message) {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: rs.message
                    }
                });

            } else {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Done!'
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
            });
        });
    }

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                {/* <Grid item xs={12}>
                    <Tooltip title='Make request' className={classes.newButton}>
                        <Fab
                            color='primary'
                            onClick={() => setNewRequest(true)}
                        >
                            <EditIcon />
                        </Fab>
                    </Tooltip>
                </Grid> */}
                <Grid item xs={12}>
                    <Typography align="center" variant='h3' style={{ color: '#3f51b5' }}>Return Request</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Note, this is a check-out request, so make sure you're looking to check out and leave.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper style={{ padding: '2px 5px 5px 5px' }}>
                        <Typography style={{ color: '#009688' }}>Stating the reason and details will be a good example of getting a refund</Typography>
                        <Grid container style={{ margin: '0px 0px 0px 0px' }}>
                            <Grid item xs={12} >
                                <form noValidate autoComplete="off" style={{ marginTop: '5px' }} onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <ThemeProvider theme={theme}>
                                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                    <KeyboardDatePicker
                                                        disableToolbar
                                                        variant="dialog"
                                                        format="MM/dd/yyyy"
                                                        margin="normal"
                                                        id="date-picker-inline"
                                                        label="Leaving Date"
                                                        value={formData.leavingDate}
                                                        onChange={(e) => setFormData({ ...formData, leavingDate: e })}
                                                        KeyboardButtonProps={{
                                                            'arial-label': 'change date'
                                                        }}
                                                        required
                                                        fullWidth
                                                        className={{ margin: '20px', padding: 0 }}
                                                        minDate={Date.now()}
                                                    />
                                                </MuiPickersUtilsProvider>
                                            </ThemeProvider>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Reason"
                                                multiline
                                                rows={10}
                                                // defaultValue=""
                                                variant="outlined"
                                                value={formData.reason}
                                                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                                fullWidth
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} md={6} lg={3}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                endIcon={<SendIcon />}
                                                style={{ width: '100%' }}
                                                type='submit'
                                            >
                                                Send
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            I check out ahead of time, will I get a refund?
                        </Typography>
                        <Typography>
                            It is possible, depending on your case, that your request will be reviewed by the hostel management.
                        </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            Why isn't it always refunded when leaving earlier than the paid time?
                        </Typography>
                        <Typography>
                            Under the contract, you have accepted that any refund requests for leaving the dormitory earlier than scheduled must be reviewed by the management, and the management reserves the right not to refund any unused funds.
                            Management's decision is final.
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

export default ResidentBill;