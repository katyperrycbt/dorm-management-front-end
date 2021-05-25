import React, { useState } from 'react';
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
    telephone: ''
  },
  parentinfo: {
    name: '',
    address: '',
    tel: ''
  },
  academic_year: 0,
  dob: Date.now(),
  identity_card: 0,
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

export default function AddressForm() {
  const [formData, setFormData] = useState(init);
  const [idcheck, setidcheck] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ color: '#f44336' }}>
        Fill in the blanks
      </Typography>
      <Grid container spacing={3}>
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
          <TextField
            required
            id="dob"
            name="dob"
            label="Date of birth"
            fullWidth
            type='date'
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}
          />
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
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}