import React from "react";
import useStyles from "./styles";

import { Grid, Typography } from "@material-ui/core";

export default function Content() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={2}>
      {/* <Grid item xs={12}>
        <Typography className={classes.intro}>
          This Dormitory website is a product of our team, we are inspired by
          Dormitory A and B of Ho Chi Minh National University
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.firstPara}>
          Managing a whole dormitory with the number of students can be up to
          more than 1 thousand would not be very easy. Furthermore, the
          dormitory management board not only have to manage the student, but
          also they have to control other things like power or water supply,
          security, etc.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.secondPara}>
          For that reason, our team have came out with the idea that a website
          can help the manager of the dormitory partly reduce the burden. Our
          website can help the dormitory to manage the students and other stuffs
          like bill, etc. Although this website is still not supply everything
          but we will improve it in the future as we update it monthly.
        </Typography>
      </Grid> */}
      <Grid item xs={12} style={{ overflow: 'auto', width: '100%' }}>
        <Typography className={classes.intro} variant='h5'>
          ABOUT, TERMS AND CONDITIONS
        </Typography>
        <hr style={{ background: '#3f51b5', width: '100%', borderWidth: '3px' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.firstPara} variant='h5'>
          About
        </Typography>
        <Typography className={classes.firstPara} variant='subtitle2'>
          International University Dormitory, Ho Chi Minh City National University, was established in May 2018 under the license of the school administration and national university board of directors.
          <br/>
          The dormitory consists of 2 buildings, each building 15 floors, with a capacity of up to 3,000 students each. International university dormitory is a standard dormitory with full practical amenities: living room, lounge, sports field, swimming pool, campus and other service shops. With the desire to bring the best conditions for students, international university dormitories have diverse and reasonable accommodation prices, ranging from 500 to 2 million VND / student / month.
          <br/>
          The dormitory has strict security procedures and is protected 24/24 and over the past few years, we pride ourselves on being a safe dormitory for students.
          <br/>
          To register for accommodation, contact us at: https://iu-dormitory.fun/about
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.secondPara}>

        </Typography>
      </Grid>
    </Grid>
  );
}
