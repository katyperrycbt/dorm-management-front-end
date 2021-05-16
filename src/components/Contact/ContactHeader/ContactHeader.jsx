import useStyles from "./styles";

import { Grid } from "@material-ui/core";

export default function ContactHeader() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <img
        className={classes.image}
        // src="https://imsmachinerydotcom.files.wordpress.com/2020/04/contact_us_banner_long2.jpg"
        src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1274&q=80"
        alt=""
      />
    </Grid>
  );
}
