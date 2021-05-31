import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import CountrySelect from './CountrySelect';
import Religion from './Religion';
import Folk from './Folk';
import CDW from './CDW';
import AddressGG from './AlterGGPlace';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button } from '@material-ui/core';

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

const dateConverter = (date) => ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear();

export default function AddressForm({ init, formData, setFormData }) {
  const [idcheck, setidcheck] = useState(false);
  const [idcheckPhone, setidcheckPhone] = useState(false);
  const [idcheckPhone2, setidcheckPhone2] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [checkInsurance, setCheckInsurance] = useState(false);
  const [show, setShow] = useState(JSON.stringify(init, null, 50));
  const [open, setOpen] = useState(false);

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
            Student information
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
            value={formData.full_name ? formData.full_name : ''}
            InputLabelProps={{ shrink: formData?.full_name ? true : false, color: "primary" }}
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
              label={`Date of birth [${dateConverter(new Date((new Date().getFullYear() - (24 + 1970)) * 31556926000))} 
                - ${dateConverter(new Date((new Date().getFullYear() - (17 + 1970)) * 31556926000))}]`}
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
              value={formData.dob ? formData.dob : null}
              maxDate={(new Date().getFullYear() - (17 + 1970)) * 31556926000}
              minDate={(new Date().getFullYear() - (24 + 1970)) * 31556926000}
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
              value={formData.gender ? formData.gender : ''}
              // InputLabelProps={{ shrink: formData?.gender ? true : false, color: "primary" }}
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
              value={formData.academic_year ? formData.academic_year : ''}
              // InputLabelProps={{ shrink: formData?.academic_year ? true : false, color: "primary" }}
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
            value={formData.identity_card ? formData.identity_card : ''}
            InputLabelProps={{ shrink: formData?.identity_card ? true : false, color: "primary" }}
            onChange={(e) => {
              setFormData({ ...formData, identity_card: e.target.value })
              if (/^\d{9}(?:\d{3})?$/.test(parseInt(e.target.value))) {
                setidcheck(false);
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
            value={formData.email ? formData.email : ''}
            InputLabelProps={{ shrink: formData?.email ? true : false, color: "primary" }}
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
            value={formData.field_of_major ? formData.field_of_major : ''}
            InputLabelProps={{ shrink: formData?.field_of_major ? true : false, color: "primary" }}
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
            value={formData?.residentinfo?.telephone ? formData.residentinfo.telephone : ''}
            InputLabelProps={{ shrink: formData?.residentinfo?.telephone ? true : false, color: "primary" }}
            onChange={(e) => {
              setFormData({
                ...formData, residentinfo: {
                  ...formData.residentinfo,
                  telephone: e.target.value
                }
              })
              if (/^0(86|96|97|98|32|33|34|35|36|37|38|39|88|91|94|83|84|85|81|82|89|90|93|70|79|77|76|78|92|56|58|99|59|87)\d{7}$/.test(e.target.value)) {
                setidcheckPhone(false);
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
            value={formData?.parentinfo?.name ? formData.parentinfo.name : ''}
            InputLabelProps={{ shrink: formData?.parentinfo?.name ? true : false, color: "primary" }}
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
            value={formData?.parentinfo?.tel ? formData.parentinfo.tel : ''}
            InputLabelProps={{ shrink: formData?.parentinfo?.tel ? true : false, color: "primary" }}
            onChange={(e) => {
              setFormData({
                ...formData, parentinfo: {
                  ...formData.parentinfo,
                  tel: e.target.value
                }
              })
              if (/^0(86|96|97|98|32|33|34|35|36|37|38|39|88|91|94|83|84|85|81|82|89|90|93|70|79|77|76|78|92|56|58|99|59|87)\d{7}$/.test(e.target.value)) {
                setidcheckPhone2(false);
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
        {/* Insurance information */}
        <Grid item xs={12}>
          <Typography variant="h6" style={{ color: '#3f51b5' }} align='center'>
            Insurance information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='dssss'
            name='psarent_name'
            label="Insurance number"
            fullWidth
            type='text'
            required
            error={checkInsurance}
            helperText={checkInsurance ? 'Invalid insurance number' : ''}
            value={formData?.insurance?.id ? formData.insurance.id : ''}
            InputLabelProps={{ shrink: formData?.insurance?.id ? true : false, color: "primary" }}
            onChange={(e) => {
              setFormData({
                ...formData, insurance: {
                  ...formData.insurance,
                  id: e.target.value
                }
              })
              if (/^SV\d{13}$/.test(e.target.value)) {
                setCheckInsurance(false);
              } else {
                if (e.target.value.length > 0) {
                  setCheckInsurance(true);
                } else {
                  setCheckInsurance(false);
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-pickaer-inline"
              label={`Date of issue`}
              required
              fullWidth
              value={formData.insurance.date_of_issue ? formData.insurance.date_of_issue : null}
              maxDate={Date.now()}
              onChange={(e) => setFormData({
                ...formData, insurance: {
                  ...formData.insurance,
                  date_of_issue: e
                }
              })}
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
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picktoaer-inline"
              label={`Valid from`}
              required
              fullWidth
              value={formData.insurance.from ? formData.insurance.from : null}
              maxDate={Date.now()}
              onChange={(e) => setFormData({
                ...formData, insurance: {
                  ...formData.insurance,
                  from: e
                }
              })}
              placeholder="Choose by click on the side button"
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
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-pickafromer-inline"
              label={`Valid to`}
              required
              fullWidth
              value={formData.insurance.to ? formData.insurance.to : null}
              maxDate={Date.now() + 31556926000}
              onChange={(e) => setFormData({
                ...formData, insurance: {
                  ...formData.insurance,
                  to: e
                }
              })}
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