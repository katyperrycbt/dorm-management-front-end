import useStyles from "./styles";

import ContactHeader from "./ContactHeader/ContactHeader";
import RegisterButton from "./Register/RegisterButton/RegisterButton";
import HealthDeclarationButton from "./HealthDeclaration/HealthDeclarationButton/HealthDeclarationButton";

import { Grid } from "@material-ui/core";

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item xs={12}>
        <ContactHeader />
      </Grid>
      <Grid
        container
        item
        xs={5}
        // direction="column"
        className={classes.optionButton}
        spacing={1}
      >
        <Grid item xs={12}>
          <RegisterButton />
        </Grid>
        <Grid item xs={12}>
          <HealthDeclarationButton />
        </Grid>
      </Grid>
    </Grid>
  );
}
