import { useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import AdminGeneral from "./AdminGeneral/AdminGeneral";
import AdminDetail from "./AdminDetail/AdminDetail";

import { Avatar, Grid } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Admins() {
  const classes = useStyles();
  const history = useHistory();
  const [toggle, setToggle] = useState(0);

  const profile = JSON.parse(localStorage.getItem("iu-student"));

  if (!profile) {
    history.push("/");
    return <></>;
  }
  return (
    <div className={classes.container}>
      <Grid container alignItems="stretch" spacing={3}>
        <Grid item xs={12} className={classes.root3}>
          <Grid item sm={6} xs={12} className={classes.root4}>
            <Avatar
              alt="personal avatar"
              src={profile.info?.avt ? profile.info?.avt : "dormitory.png"}
              className={`${classes.large} ${classes.green}`}
            >
              <AccountCircleIcon className={classes.large2} />
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.root4}>
            <AdminGeneral />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AdminDetail />
        </Grid>
      </Grid>
    </div>
  );
}
