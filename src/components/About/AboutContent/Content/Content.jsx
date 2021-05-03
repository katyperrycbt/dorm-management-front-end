import React from "react";
import useStyles from "./styles";

import { Grid, Typography } from "@material-ui/core";

export default function Content() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={2} maxWidth="md">
      <Grid item xs={12}>
        <Typography className={classes.intro}>
          This Dormitory website is a product of our team, we are inspired by
          Dormitory A and B of Ho Chi Minh National University
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.firstPara}>
          Managing a whole dormitory with the number of students can be up to
          more than 1 thousand would not be very easy. Furthermore, the
          dormitory management board not only have to manage the student, but
          also they have to control other things like power or water supply,
          security, etc.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.secondPara}>
          For that reason, our team have came out with the idea that a website
          can help the manager of the dormitory partly reduce the burden. Our
          website can help the dormitory to manage the students and other stuffs
          like bill, etc. Although this website is still not supply everything
          but we will improve it in the future as we update it monthly.
        </Typography>
      </Grid>
    </Grid>
  );
}
