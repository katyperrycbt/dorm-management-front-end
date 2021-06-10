import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import axios from 'axios';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [cal, setCal] = React.useState(0);
  axios.get(`https://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_CURRENCY}`).then((rs) => {
    setCal((rs.data.rates.VND / rs.data.rates.USD).toFixed(2));
  })

  return (
    <React.Fragment>
      <Title>Exchange rate (from USD)</Title>
      <Typography component="p" variant="h4">
        đ {cal}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {new Date(Date.now()).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </Typography>
      <div>
        <Link color="primary" href="https://fixer.io/" onClick={preventDefault} style={{color: '#f44336'}}>
          Source: fixer.io
        </Link>
      </div>
    </React.Fragment>
  );
}