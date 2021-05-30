import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { getAvaiRoom } from '../../../actions/admin.stuff'
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { useDispatch } from 'react-redux';
import RoomSelect from './RoomSelect';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  blue: {
    color: '#3f51b5'
  },
  black: {
    color: '#000'
  },
  pre: { outline: '1px solid #ccc', padding: '5px', margin: '5px', backgroundColor: 'white !important' },
}));


export default function PaymentForm({ init, formData, setFormData }) {
  const [show, setShow] = useState(JSON.stringify(init, null, 50));
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [value, setValue] = useState(4);
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Choose room
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl} fullWidth required>
            <InputLabel id={`demos${Date.now()}-simple-select-label`}>Room type</InputLabel>
            <Select
              labelId="demo-saaaample-sesqsxxlect-label"
              id="demaaaaaaaaaaao-simple-select"
              value={value}
              onChange={async (e) => {
                dispatch({ type: SET_LINEAR, data: true });
                getAvaiRoom(e.target.value).then((rs) => {
                  dispatch({ type: SET_LINEAR, data: false });
                  dispatch({
                    type: SET_SNACK, data: {
                      open: true,
                      msg: 'Done!'
                    }
                  });
                  setRooms(rs);
                  setValue(e.target.value);
                }).catch((err) => {
                  dispatch({ type: SET_LINEAR, data: false });
                  dispatch({
                    type: SET_SNACK, data: {
                      open: true,
                      msg: 'Oops! Fail to select, try again!'
                    }
                  });
                });
              }}
            >
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={6}>6</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <RoomSelect formData={formData} setFormData={setFormData} rooms={rooms} />
        </Grid>
        <Grid item xs={12} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-pisssscker-inline"
              label={`From`}
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
                }
              }}
              placeholder="Choose by click on the side button"
              value={formData.from ? formData.from : null}
              maxDate={Date.now() + 604800000}
              minDate={Date.now()}
              onChange={(e) => setFormData({ ...formData, from: e })}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} md={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-pisssscsssssker-inline"
              label={`To`}
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
                }
              }}
              placeholder="Choose by click on the side button"
              value={new Date(31556926000 * (new Date().getFullYear() - 1970 + 1))} 
              onChange={(e) => setFormData({ ...formData, to: new Date(31556926000 * (new Date().getFullYear() - 1970 + 1)) })}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={() => {
            setOpen((old) => !old);
            setShow(JSON.stringify(formData, null, 50));
          }} color="secondary" variant='outlined'>{!open ? `Check form's result` : `Close form's result`}</Button>
        </Grid>
        {
          open && <Grid item xs={12}>
            <pre className={classes.pre}>
              {show}
            </pre>
          </Grid>
        }
      </Grid>
    </React.Fragment>
  );
}