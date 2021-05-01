import React from "react";
import useStyles from "./styles";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

export default function InforForm({
  image,
  name,
  phone,
  email,
  position,
  spec_position,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item>
            <img className={classes.img} alt="avatar" src={image} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  style={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    fontSize: 17,
                  }}
                >
                  {name}
                </Typography>
                <Typography variant="body2">{position}</Typography>
                <Typography variant="body2">CONTACT:</Typography>
                <Typography variant="body2" color="textSecondary">
                  Phone: {phone}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Email: {email}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2">{spec_position}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
