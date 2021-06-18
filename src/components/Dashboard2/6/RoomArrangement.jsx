import { useState, useEffect } from 'react';
import {
  Typography, Container, Grid, Box, Link, Paper,
  Accordion, AccordionDetails, AccordionSummary, TextField
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { getAdminInfo, editAdminInfo } from '../../../actions/admin.info';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';

import VerticalTabs from './Layout';
import HorizontalTabs from './LayoutMobile';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#3f51b5' }}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/thuc.katy" style={{ color: '#f44336' }}>
        IU Dormitory
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const initForm = { name: '', gender: '', tel: '' };

const Profile = ({ open }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState(initForm);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_LINEAR, data: true });
    dispatch(getAdminInfo()).then(() => {
      dispatch({ type: SET_LINEAR, data: false });
      dispatch({
        type: SET_SNACK, data: {
          open: true,
          msg: 'Done!'
        }
      })
    }).catch((err) => {
      dispatch({ type: SET_LINEAR, data: false });
      dispatch({
        type: SET_SNACK, data: {
          open: true,
          msg: err.message
        }
      })
    });
  }, [dispatch]);

  return <main className={clsx(classes.content, {
    [classes.contentShift]: open,
  })}>
    <div className={classes.appBarSpacer} />
    <Container maxWidth={'lg'} className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Room Arrangement</Typography>
          <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Change or remove student's room and de-activate student accounts.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.vertical}>
            <VerticalTabs />
          </Paper>
          <Paper className={classes.horizontal}>
            <HorizontalTabs />
          </Paper>
        </Grid>
      </Grid>
      <Box pt={4}>
        <Copyright />
      </Box>
    </Container>
  </main>
}

export default Profile;