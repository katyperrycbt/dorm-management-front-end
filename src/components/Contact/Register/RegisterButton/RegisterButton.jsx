import React from "react";
import useStyles from "./styles";
import AddIcCallIcon from "@material-ui/icons/AddIcCall";
import { Grid, Typography, Paper, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import RegisterContent from "../RegisterContent/RegisterContent";

export default function RegisterButton() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} onClick={handleClick}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <AddIcCallIcon style={{ fontSize: "200%", textAlign: "center" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ fontSize: "100%", left: 0 }}>
              Register for room
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <RegisterContent />
        </Fade>
      </Modal>
    </div>
  );
}
