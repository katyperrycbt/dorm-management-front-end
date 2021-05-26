import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import CountrySelect from './CountrySelect';
import Religion from './Religion';
import Folk from './Folk';
import CDW from './CDW';
import AddressGG from './AddressGG';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import axios from 'axios';
import { Button } from '@material-ui/core';

const init = {
  folk: '',
  photo: '',
  religion: '',
  stayindorm: [],
  email: '',
  password: '',
  full_name: '',
  gender: '',
  residentinfo: {
    telephone: '',
    city: '',
    district: '',
    ward: ''
  },
  parentinfo: {
    name: '',
    address: '',
    tel: ''
  },
  academic_year: parseInt(new Date().getFullYear()),
  dob: `01/01/${parseInt(new Date().getFullYear()) - 18}`,
  identity_card: '',
  field_of_major: '',
  country: '',
  insurance: {
    brand: ''
  },
  room: '',
  from: '',
  to: ''
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

export default function AddressForm() {
  const [formData, setFormData] = useState(init);
  const [idcheck, setidcheck] = useState(false);
  const [idcheckPhone, setidcheckPhone] = useState(false);
  const [idcheckPhone2, setidcheckPhone2] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const classes = useStyles();

  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file);
    setFormData({ ...formData, photo: base64 })
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom style={{ color: '#f44336' }}>
        Fill in the blanks
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ color: '#3f51b5' }} align='center'>
            Basic information
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="full_name"
            name="full_name"
            label="Full name"
            fullWidth
            type='text'
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picker-inline"
              label={`Date of birth [01/01/${parseInt(new Date().getFullYear()) - 24} - 31/12/${parseInt(new Date().getFullYear()) - 18}]`}
              required
              fullWidth
              value={formData.dob}
              maxDate={`31/12/${parseInt(new Date().getFullYear()) - 18}`}
              minDate={`01/01/${parseInt(new Date().getFullYear()) - 24}`}
              onChange={(e) => setFormData({ ...formData, dob: e })}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl} fullWidth required>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <MenuItem value={'male'}>Male</MenuItem>
              <MenuItem value={'female'}>Female</MenuItem>
              <MenuItem value={'other'}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl} fullWidth required>
            <InputLabel id="demo-simple-select-label">Academic year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.academic_year}
              onChange={(e) => setFormData({ ...formData, academic_year: e.target.value })}
            >
              <MenuItem value={parseInt(new Date().getFullYear()) - 3}>
                {parseInt(new Date().getFullYear()) - 3}
              </MenuItem>
              <MenuItem value={parseInt(new Date().getFullYear()) - 2}>
                {parseInt(new Date().getFullYear()) - 2}
              </MenuItem>
              <MenuItem value={parseInt(new Date().getFullYear()) - 1}>
                {parseInt(new Date().getFullYear()) - 1}
              </MenuItem>
              <MenuItem value={parseInt(new Date().getFullYear()) - 0}>
                {parseInt(new Date().getFullYear()) - 0}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="identity"
            name="id"
            label="Identity number"
            fullWidth
            type='number'
            error={idcheck}
            helperText={idcheck ? 'Invalid identity number' : ''}
            onChange={(e) => {
              if (/^\d{9}(?:\d{3})?$/.test(parseInt(e.target.value))) {
                setidcheck(false);
                setFormData({ ...formData, identity_card: e.target.value })
              } else {
                if (e.target.value.length > 0) {
                  setidcheck(true);
                } else {
                  setidcheck(false);
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="emaild"
            name="email"
            label="Email"
            type='email'
            fullWidth
            required
            error={wrongEmail}
            helperText={wrongEmail ? 'Invalid email' : ''}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
                .test(String(e.target.value).toLowerCase())) {
                setWrongEmail(false);
              } else {
                if (e.target.value.length > 0) {
                  setWrongEmail(true);
                } else {
                  setWrongEmail(false);
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="field_of_major"
            name="field_of_major"
            label="Field of major"
            fullWidth
            type='text'
            onChange={(e) => setFormData({ ...formData, field_of_major: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CountrySelect formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Folk formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Religion formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="originalFileName2"
            type="file"
            inputProps={{ accept: 'image/*' }}
            InputLabelProps={{ shrink: true, color: "primary" }}
            label="Photo"
            name="originalFileName"
            onChange={handleFileRead}
            required
            fullWidth

          />
        </Grid>
        {/* resident info here */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tel studeent info"
            name="id"
            label="Mobile number"
            fullWidth
            type='number'
            error={idcheckPhone}
            helperText={idcheckPhone ? 'Invalid mobile number' : ''}
            onChange={(e) => {
              if (/^0(86|96|97|98|32|33|34|35|36|37|38|39|88|91|94|83|84|85|81|82|89|90|93|70|79|77|76|78|92|56|58|99|59|87)\d{7}$/.test(e.target.value)) {
                setidcheckPhone(false);
                setFormData({
                  ...formData, residentinfo: {
                    ...formData.residentinfo,
                    telephone: e.target.value
                  }
                })
              } else {
                if (e.target.value.length > 0) {
                  setidcheckPhone(true);
                } else {
                  setidcheckPhone(false);
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CDW formData={formData} setFormData={setFormData} />
        </Grid>
        {/* Parent info here */}
        <Grid item xs={12}>
          <Typography variant="h6" style={{ color: '#3f51b5' }} align='center'>
            Parent information
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type='text'
            required
            id='paname'
            name='parent_name'
            label='Parent name'
            fullWidth
            onChange={(e) => setFormData({ ...formData, parentinfo: { ...formData.parentinfo, name: e.target.value } })}
          />
        </Grid>
        <Grid item xs={12}>
          <AddressGG formData={formData} setFormData={setFormData} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id='ds'
            name='parent_name'
            label="Parent's mobile number"
            fullWidth
            type='number'
            error={idcheckPhone2}
            helperText={idcheckPhone2 ? 'Invalid mobile number' : ''}
            onChange={(e) => {
              if (/^0(86|96|97|98|32|33|34|35|36|37|38|39|88|91|94|83|84|85|81|82|89|90|93|70|79|77|76|78|92|56|58|99|59|87)\d{7}$/.test(e.target.value)) {
                setidcheckPhone2(false);
                setFormData({
                  ...formData, parentinfo: {
                    ...formData.parentinfo,
                    tel: e.target.value
                  }
                })
              } else {
                if (e.target.value.length > 0) {
                  setidcheckPhone2(true);
                } else {
                  setidcheckPhone2(false);
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button onClick={() => console.log(formData)} color="secondary" variant='outlined'>test</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}