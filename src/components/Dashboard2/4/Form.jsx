import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './BasicInfo';
import PaymentForm from './Room';
import Review from './Review';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { useDispatch } from 'react-redux';

import { adminSignUpStudent } from '../../../actions/admin.create.account';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    // marginLeft: theme.spacing(2),
    // marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      // marginLeft: 'auto',
      // marginRight: 'auto',
    },
  },
  paper: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: '6px',
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Basic information', 'Room', 'Review'];
function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}
const init = {
  folk: '',
  photo: '',
  religion: '',
  stayindorm: [],
  email: '',
  password: generatePassword(),
  full_name: '',
  gender: '',
  residentinfo: {
    telephone: '',
    city: '',
    district: '',
    ward: ''
  },
  parentinfo: {
    name: '',
    address: '',
    tel: ''
  },
  academic_year: parseInt(new Date().getFullYear()),
  dob: '',
  identity_card: '',
  field_of_major: '',
  country: '',
  insurance: {
    id: '',
    date_of_issue: '',
    from: '',
    to: ''
  },
  room: '',
  from: '',
  to: new Date(31556926000 * (new Date().getFullYear() - 1970 + 1))
}


const keyify = (obj, prefix = '') =>
  Object.keys(obj).reduce((res, el) => {
    if (Array.isArray(obj[el])) {
      return res;
    } else if (typeof obj[el] === 'object' && obj[el] !== null) {
      return [...res, ...keyify(obj[el], prefix + el + '.')];
    }
    return [...res, prefix + el];
  }, []);

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(init);
  const dispatch = useDispatch();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      dispatch({ type: SET_LINEAR, data: true });
      adminSignUpStudent(formData).then((rs) => {
        console.log(rs);
        dispatch({ type: SET_LINEAR, data: false });
        dispatch({
          type: SET_SNACK, data: {
            open: true,
            msg: rs
          }
        });
        setActiveStep(activeStep + 1);
      }).catch((err) => {
        console.log(err.message);
        dispatch({ type: SET_LINEAR, data: false });
        dispatch({
          type: SET_SNACK, data: {
            open: true,
            msg: err.message
          }
        });
      });
    }
    setActiveStep(activeStep + 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm init={init} formData={formData} setFormData={setFormData} />;
      case 1:
        return <PaymentForm init={init} formData={formData} setFormData={setFormData} />;
      case 2:
        return <Review formData={formData} setFormData={setFormData} />;
      default:
        throw new Error('Unknown step');
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const keys = keyify(formData);
    let temp = [];
    for (let i = 0; i < keys.length; i++) {
      let splitt = [];
      if (keys[i].indexOf('.') > -1) {
        splitt = keys[i].split(".");
      }
      if (splitt.length > 0) {
        let current = formData[splitt[0]];
        for (let k = 1; k < splitt.length; k++) {
          current = current[splitt[k]];
        }
        if (current === null || current === undefined || current === '') {
          temp.push(keys[i])
        }
      } else {
        if (formData[keys[i]] === null || formData[keys[i]] === undefined || formData[keys[i]] === '') {
          temp.push(keys[i])
        }

      }
    }
    if (temp.length > 0 && activeStep >= steps.length - 2) {
      dispatch({
        type: SET_SNACK, data: {
          open: true,
          msg: `These fields are empty! (${temp}) Fill them out!`
        }
      });
      return;
    }
    return handleNext();
  }

  return (
    <React.Fragment >
      <CssBaseline />
      <main className={classes.layout} style={{ width: '100%' }}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h2" align="center" style={{ color: '#3f51b5' }}>
            New Student
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom style={{ color: '#3f51b5' }}>
                  Account created!
                </Typography>
                <Typography style={{ color: '#3f51b5' }}>
                  Send an email containing account's information here.
                </Typography>
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form onSubmit={handleSubmitForm}>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      type='submit'
                    >
                      {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                    </Button>
                  </div>
                </form>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}