import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";

export default function RegisterContent() {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={9}>
      <Grid container>
        <Grid item xs={12}>
          <CardContent style={{ textAlign: "center" }}>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Register For Room
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                For one who want to register for accomodation whether short
                period or long period, please contact us at:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold" }}>
                iu-dormitory@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Or phone us at:</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography style={{ fontWeight: "bold" }}>
                (028) 312345678
              </Typography>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}
