import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getRoomBill } from '../../../actions/admin.stuff';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  pre: { outline: '1px solid #ccc', padding: '5px', margin: '5px', backgroundColor: 'white !important' },

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

export default function Review({ formData, setFormData }) {
  const classes = useStyles();
  const addresses = [formData.residentinfo.ward, formData.residentinfo.district, formData.residentinfo.city];
  const dispatch = useDispatch();
  const [payments, setPayments] = useState([]);

  const dateToString = (date) => {
    return ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
  }

  useEffect(() => {
    if (!formData.password) setFormData({ ...formData, password: generatePassword() })
    async function run() {
      dispatch({ type: SET_LINEAR, data: true });
      getRoomBill(formData.room, 12 - new Date(formData.from).getMonth() - 1).then((rs) => {
        dispatch({ type: SET_LINEAR, data: false });
        dispatch({
          type: SET_SNACK, data: {
            open: true,
            msg: 'Done!'
          }
        });
    
        setPayments([
          { name: 'From', detail: dateToString(new Date(formData.from)) },
          { name: 'To', detail: dateToString(new Date(formData.to)) },
          { name: 'Number of month', detail: (12 - new Date(formData.from).getMonth() - 1) },
          { name: 'Unit price', detail: rs.unit_price },
          { name: 'Total cost', detail: rs.total },
        ]);
      }).catch((err) => {
        dispatch({ type: SET_LINEAR, data: false });
        dispatch({
          type: SET_SNACK, data: {
            open: true,
            msg: 'Oops! Fail to select, try again!'
          }
        });
      });
    }
    run();
  }, [formData, setFormData, dispatch]);



  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
        Review account and bill
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <pre className={classes.pre} style={{ maxHeight: '350px' }}>
            {JSON.stringify(formData, null, 50)}
          </pre>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom className={classes.title} style={{ color: '#3f51b5' }}>
            Username: {formData.email}
          </Typography>
          <Typography variant="h6" gutterBottom className={classes.title} style={{ color: '#f44336' }}>
            Password: {formData.password}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title} style={{ color: '#f44336' }}>
            Bill to
          </Typography>
          <Typography gutterBottom>{formData.full_name}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title} style={{ color: '#f44336' }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}