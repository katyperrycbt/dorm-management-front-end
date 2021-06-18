import { useState, useEffect } from 'react';
import {
    Typography, Container, Grid, Box, Link, TextField, Button
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { getAllRoom } from '../../../actions/admin.stuff';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import GetAllRoom from './GetAllRoom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { createUtilityBill } from '../../../actions/admin.stuff';


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

const initForm = { room: '', recorddate: new Date(), power: {}, water: {}, paymentstatus: false, note: '' };

const Profile = ({ open }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initForm);
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        getAllRoom().then((rs) => {
            if (rs?.message) {
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
                setData(rs);
                console.log(rs);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({ type: SET_LINEAR, data: true });
        createUtilityBill(formData).then((rs) => {
            if (rs?.message) {
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
                        msg: 'Created bill!'
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


    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container}>
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>New Utility Bill</Typography>
                        <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Be careful with data entry.</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <GetAllRoom rooms={data} formData={formData} setFormData={setFormData} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                id="date-picker-inline"
                                label={`Record Date`}
                                required
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                    classes: {
                                        root: classes.blue
                                    }
                                }}
                                InputProps={{
                                    disabled: true,
                                    classes: {
                                        input: classes.black
                                    },
                                    variant: "outlined"
                                }}
                                placeholder="Click the button to choose"
                                value={formData?.recorddate ? formData.recorddate : null}
                                maxDate={Date.now()}
                                onChange={(e) => { setFormData({ ...formData, recorddate: e }); console.log(formData) }}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="number"
                            label="Power / Last Record"
                            fullWidth
                            required
                            value={formData?.power?.lastrecord ? formData?.power?.lastrecord : 0}
                            onChange={(e) => setFormData({ ...formData, power: { ...formData.power, lastrecord: e.target.value } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="number"
                            label="Power / Recent Record"
                            fullWidth
                            required
                            value={formData?.power?.recentrecord ? formData?.power?.recentrecord : 0}
                            onChange={(e) => setFormData({ ...formData, power: { ...formData.power, recentrecord: e.target.value } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="number"
                            label="Water / Last Record"
                            fullWidth
                            required
                            value={formData?.water?.lastrecord ? formData?.water?.lastrecord : 0}
                            onChange={(e) => setFormData({ ...formData, water: { ...formData.water, lastrecord: e.target.value } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="number"
                            label="Water / Recent Record"
                            fullWidth
                            required
                            value={formData?.water?.recentrecord ? formData?.water?.recentrecord : 0}
                            onChange={(e) => setFormData({ ...formData, water: { ...formData.water, recentrecord: e.target.value } })}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl component="fieldset" required>
                            <FormLabel component="legend">Payment Status</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={formData?.paymentstatus !== null ? (formData.paymentstatus === true ? 'true' : 'false') : 'false'} onChange={
                                (e) => {
                                    setFormData({ ...formData, paymentstatus: e.target.value === 'true' ? true : false });
                                    console.log(e.target.value);
                                }
                            }>
                                <FormControlLabel value={'false'} control={<Radio />} label="Unpaid" />
                                <FormControlLabel value={'true'} control={<Radio />} label="Paid" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            type="text"
                            label="Note"
                            fullWidth
                            required
                            value={formData?.note ? formData?.note : ''}
                            onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Button type="submit">
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    </main>
}

export default Profile;