import React from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { open, close } from "../../../../reducers/modalContact";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import { Grid, Paper, Typography, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import HealthDeclarationContent from "../HealthDeclarationContent/HealthDeclarationContent";

export default function HealthDeclarationButton() {
  const openState = useSelector((state) => state.modalContact.openState);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    dispatch(close());
  };

  const handleOpen = () => {
    dispatch(open());
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} onClick={handleOpen}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <LocalHospitalIcon style={{ fontSize: "200%" }} />
          </Grid>
          <Grid item xs={12}>
            <Typography style={{ fontSize: "100%" }}>
              Health Declaration
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Modal
        className={classes.modal}
        open={openState}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openState}>
          <HealthDeclarationContent />
        </Fade>
      </Modal>
    </div>
  );
}
