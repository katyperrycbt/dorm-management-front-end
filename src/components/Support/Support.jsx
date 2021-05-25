import React from "react";
import useStyles from "./styles";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import FireplaceIcon from "@material-ui/icons/Fireplace";

export default function Support() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
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
          <div className={classes.accordion}>
            <Accordion>
              <AccordionSummary
                expandIcon={<LocalHospitalIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Emergency Medic Phone Number
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  If you have any urgence or any problems with your health,
                  please contact this number of medic room for any services:{" "}
                  <b>028 xxxxxxx</b>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<FireplaceIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Fire Department Phone Number
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Please contact this phone number if you due with fire problem:{" "}
                  <b>119</b>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
