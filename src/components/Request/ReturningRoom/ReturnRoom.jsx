import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_RETURN } from '../FixingRoom/FixingRequest/RequestInfor';
import ReturnSnippet from './ReturnSnippet';

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
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *':{
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    name:{
        background: '#fff',
    },
    id:{
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

export default function ReturnRoom(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const request = useSelector((state) => state.RequestList.ReturnInfor);
    const [ gender, setGender ] = React.useState('');
    const [ selectedDate, setSelectedDate ] = React.useState(new Date(Date.now()));
    const [ feedBack, setFeedBack ] = React.useState('');
    const [ room, setRoom ] = React.useState('');
    const [ name, setName ] = React.useState('');
    const [ id, setId ] = React.useState('');
    const return_id = useSelector((state) => state.RequestList.return_id);

    const handleSubmit = () => {
        dispatch({
            type: ADD_RETURN,
            request: {
                name: name,
                id: id,
                gender: gender,
                room: room,
                date: selectedDate,
                feedback: feedBack,
                return_id: return_id,
            }
        });
    }

    const handleChangeRoom = (e) => {
        setRoom(e.target.value);
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }

    const handleChange = (e) => {
        setGender(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeId = (e) => {
        setId(e.target.value);
    }

    const handleChangeFeedBack = (e) => {
        setFeedBack(e.target.value);
    }

    console.log(typeof(feedBack))

    return(
        <div>
        <form className={classes.root} noValidate autoComplete="off">
            <Typography>Request for returning the room</Typography>
            <TextField className={classes.name} value={name} id="name" label="Name" variant="outlined" onChange={handleChangeName}></TextField>
            <TextField className={classes.id} value={id} id="id" label="ID" variant="outlined" onChange={handleChangeId}></TextField>
            <FormControl className={classes.formControl}>
                <InputLabel id="GenderLabel">Gender</InputLabel>
                <Select
                    className={classes.select}
                    labelId="GenderLabel"
                    id="selectGender"
                    value={gender}
                    onChange={handleChange}
                >
                    <MenuItem value='Male'>Male</MenuItem>
                    <MenuItem value='Female'>Female</MenuItem>
                    <MenuItem value='Others'>Others</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="roomLabel">Room</InputLabel>
                    <Select
                        className={classes.select}
                        labelId="roomLabel"
                        id="selectRoom"
                        value={room}
                        onChange={handleChangeRoom}
                    >
                        <MenuItem value="A1.111">A1.111</MenuItem>
                        <MenuItem value="A1.112">A1.112</MenuItem>
                    </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space around">
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'arial-label' : 'change date'
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <div>                
                <TextField
                className={classes.feedback}
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={10}
                // defaultValue=""
                variant="outlined"
                value={feedBack}
                onChange={handleChangeFeedBack}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon/>}
                onClick={handleSubmit}
            >
                Send
            </Button>
        </form>
        <ReturnSnippet />
        </div>
    );
}