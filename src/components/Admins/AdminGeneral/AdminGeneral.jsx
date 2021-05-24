import { useHistory } from "react-router-dom";
import useStyles from "./styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import FontDownloadIcon from "@material-ui/icons/FontDownload";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";

export default function AdminGeneral() {
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("iu-student"));

  if (!user) {
    history.push("/");
    return <></>;
  }

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SupervisorAccountIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.info?.role ? user.info.role : "Admin"} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <FontDownloadIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Full name"
          secondary={user.info?.name ? user.info?.name : "Tran Trong Thuc"}
        />
      </ListItem>
    </List>
  );
}
