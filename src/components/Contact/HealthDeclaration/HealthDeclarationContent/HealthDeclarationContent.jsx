import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { open, close } from "../../../../reducers/modalContact";

import useStyles from "./styles";

import {
  Card,
  Typography,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import CancelIcon from "@material-ui/icons/Cancel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

export default function HealthDeclarationContent() {
  const dispatch = useDispatch();
  const openState = useSelector((state) => state.modalContact.openState);
  const handleClose = () => {
    dispatch(close());
  };

  const theme = createMuiTheme({
    overrides: {
      MuiFormControl: {
        marginNormal: {
          margin: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      },
    },
  });

  const [formData, setFormData] = React.useState({
    name: "",
    gender: "",
    email: "",
    dateRequest: Date.now(),
    reason: "",
    phone: "",
    citizenID: "",
    symptom: [],
  });

  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={9}>
      <CardContent style={{ textAlign: "center" }}>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          Health Declaration
        </Typography>
        <Typography>
          For one who came from red zone, please fill the health declaration in
          the from below
        </Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={{ height: "10%" }}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone"
                variant="outlined"
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="Cid"
                label="Citizen ID Number"
                variant="outlined"
                onChange={(e) =>
                  setFormData({ ...formData, citizenID: e.target.value })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel htmlFor="gender">Gender</InputLabel>
                <Select
                  label="Gender"
                  id="selectGender"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  variant="outlined"
                  inputProps={{
                    name: "gender",
                    id: `outlined-age-nativesdsd${Date.now()}`,
                  }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="dialog"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date"
                    value={formData.dateRequest}
                    onChange={(e) =>
                      setFormData({ ...formData, dateRequest: e })
                    }
                    KeyboardButtonProps={{
                      "arial-label": "change date",
                    }}
                    required
                    className={{ margin: "20px", padding: 0 }}
                  />
                </MuiPickersUtilsProvider>
              </ThemeProvider>
            </Grid>
            <Grid item container xs={12} justify="flex-start">
              <Grid item xs={12} sm={7}>
                <Typography>
                  Do you have any of the following symptoms?
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormGroup column>
                  <FormControlLabel
                    control={<Checkbox name="symptom1" color="Secondary" />}
                    label="Cough"
                  />
                  <FormControlLabel
                    control={<Checkbox name="symptom2" color="Secondary" />}
                    label="Fever or chills"
                  />
                  <FormControlLabel
                    control={<Checkbox name="symptom2" color="Secondary" />}
                    label="Shortness of breath or difficulty breathing
                  "
                  />
                  <FormControlLabel
                    control={<Checkbox name="symptom2" color="Secondary" />}
                    label="Fatigue"
                  />
                </FormGroup>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Your Schedule"
                multiline
                rows={10}
                // defaultValue=""
                variant="outlined"
                value={formData.reason}
                onChange={(e) =>
                  setFormData({ ...formData, reason: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12} container justify="center">
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  style={{ width: "30%" }}
                >
                  Send
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="secondary"
                  endIcon={<CancelIcon />}
                  style={{ width: "30%" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
