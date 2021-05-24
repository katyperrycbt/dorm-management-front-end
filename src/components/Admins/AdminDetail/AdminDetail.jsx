import useStyles from "./styles";
import { useHistory } from "react-router-dom";

import FingerprintIcon from "@material-ui/icons/Fingerprint";
import CakeIcon from "@material-ui/icons/Cake";
import WcIcon from "@material-ui/icons/Wc";
import EmailSharpIcon from "@material-ui/icons/EmailSharp";
import PhoneAndroidSharpIcon from "@material-ui/icons/PhoneAndroidSharp";
import ExploreIcon from "@material-ui/icons/Explore";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import LanguageIcon from "@material-ui/icons/Language";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { Grid } from "@material-ui/core";

export default function AdminDetail() {
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("iu-student"));

  if (!user) {
    history.push("/");
    return <></>;
  }

  const iconIter = [
    FingerprintIcon,
    CakeIcon,
    WcIcon,
    EmailSharpIcon,
    PhoneAndroidSharpIcon,
    ExploreIcon,
    FilterVintageIcon,
    LanguageIcon,
  ];

  const iter = {
    "Citizen Identification Number": user.info?.name
      ? user.info.name
      : "Tran Trong Thuc",
    "Date of Birth": user.info?.dob ? user.info.dob : "September 1st, 2000",
    Gender: user.info?.sex ? user.info.sex : "Male",
    Email: user.info?.grade ? user.info.grade : "katyperry@gmail.com",
    Phone: user.info?.field ? user.info.field : "0898xxxxxx",
    Folk: user.info?.folk ? user.info.folk : "Kinh",
    Religion: user.info?.religion ? user.info.religion : "None",
    Country: user.info?.country ? user.info.country : "Vietnam",
  };
  const IterDraw = () => {
    return (
      <>
        {Object.keys(iter).map((key, index) => {
          const NowIcon = iconIter[index];
          return (
            <Grid container key={`g${index}`}>
              <Grid item xs={12} className={classes.space}>
                ' '
              </Grid>
              <Grid item md={3} sm={2} />
              <Grid item md={3} sm={4} xs={12} className={classes.root2}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <NowIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary={key} />
                </ListItem>
              </Grid>
              <Grid item md={3} sm={4} xs={12} className={classes.root3}>
                <ListItem className={classes.root6}>
                  <ListItemText primary={iter[key]} />
                </ListItem>
              </Grid>
              <Grid item md={3} sm={2} />
            </Grid>
          );
        })}
      </>
    );
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <IterDraw />
      </Grid>
    </div>
  );
}
