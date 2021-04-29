import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    //   KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    name: {
        background: '#fff',
    },
    id: {
        background: '#fff',
    },
    formControl: {
        margin: theme.spacing(1),
        maxWidth: 120,
    },
    select: {
        background: '#fff',
    },
    feedback: {
        width: '60ch',
        background: '#fff',
    }
}));

export default function Return() {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const request = useSelector((state) => state.RequestList.ReturnInfor);

    const [formData, setFormData] = React.useState({ name: '', id: '', gender: '', room: '', dateRequest: Date.now(), reason: '' });

    return (
        <Container maxWidth="md" style={{padding: 0}}>
            <Grid container spacing={2} className={classes.gridContainer}>
                <Grid item xs={12} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} variant="h4">Request for returning the room</Typography></Grid>
                <Grid item xs={12} >
                    <form noValidate autoComplete="off" style={{ marginTop: '50px' }}>
                        <Grid container className={classes.gridContainer} spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="name" label="Name" variant="outlined" onChange={(e) => setFormData({ ...formData, name: e.target.value })}></TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required fullWidth id="id" label="ID" variant="outlined" onChange={(e) => setFormData({ ...formData, id: e.target.value })}></TextField>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <FormControl fullWidth variant='outlined' required>
                                    <InputLabel htmlFor="gender">Gender</InputLabel>
                                    <Select
                                        label="Gender"
                                        id="selectGender"
                                        value={formData.gender}
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        variant='outlined'
                                        inputProps={{
                                            name: 'gender',
                                            id: `outlined-age-nativesdsd${Date.now()}`,
                                        }}
                                    >
                                        <MenuItem value='Male'>Male</MenuItem>
                                        <MenuItem value='Female'>Female</MenuItem>
                                        <MenuItem value='Others'>Others</MenuItem>
                                    </Select>
                                </FormControl>                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <FormControl fullWidth variant='outlined' required>
                                    <InputLabel htmlFor='room'>Room</InputLabel>
                                    <Select
                                        label="Room"
                                        inputProps={{
                                            name: 'room',
                                            id: `outlined-age-nassstivesdsd${Date.now()}`,
                                        }}
                                        value={formData.room}
                                        onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                                    >
                                        <MenuItem value="A1.111">A1.111</MenuItem>
                                        <MenuItem value="A1.112">A1.112</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <ThemeProvider theme={theme}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="dialog"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date"
                                            value={formData.dateRequest}
                                            onChange={(e) => setFormData({ ...formData, dateRequest: e })}
                                            KeyboardButtonProps={{
                                                'arial-label': 'change date'
                                            }}
                                            required
                                            className={{ margin: '20px', padding: 0 }}
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
                                />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    endIcon={<SendIcon />}
                                    style={{width: '100%'}}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
}