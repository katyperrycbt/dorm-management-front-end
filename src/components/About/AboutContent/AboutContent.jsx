import React from "react";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";

export default function AboutContent() {
  const classes = useStyles();
  return (
    <Container maxWidth='md' style={{ padding: 0 }}>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.container}>
          <img
            // src="https://ss-images.saostar.vn/2019/02/21/4634692/49568775_1507851952680995_2534203577073664000_o-1.jpg"
            src="/aboutImage.jpg"
            alt="cover"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
