import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export default function AboutContent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} maxWidth="md">
      <Grid item xs={12} className={classes.container}>
        <div className={classes.blur}>
          <Typography variant="h5">
            Once you find us, you will never want to leave
          </Typography>
        </div>
        <img
          src="https://ss-images.saostar.vn/2019/02/21/4634692/49568775_1507851952680995_2534203577073664000_o-1.jpg"
          alt=""
          className={classes.image}
        />
      </Grid>
    </Grid>
  );
}
