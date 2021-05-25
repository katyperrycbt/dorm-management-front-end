import useStyles from './styles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../Chart';
import Deposits from '../Deposits';
import TableDashboard from '../../Dashboard/Dashboard';
import Typography from '@material-ui/core/Typography';

import Link from '@material-ui/core/Link';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{color: '#3f51b5'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.facebook.com/thuc.katy" style={{color: '#f44336'}}>
        IU Dormitory
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Dashboard = ({open}) => {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth={false} className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TableDashboard />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  )
}

export default Dashboard;