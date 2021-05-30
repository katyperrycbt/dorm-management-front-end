import { useState } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import EachResident from '../EachResident/EachResident'

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

const Account = ({ residentList, open }) => {
    const classes = useStyles();

    const [user, setUser] = useState(useSelector((state) => state.studentAccount));

    if (!user.email) {
        setUser({ email: 'katyperrycbt@gmail.com', password: 'hassssss' });
    }


    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Resident Information</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Here is your accommodation information.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        {
                            residentList.map((key, index) => {
                                return <EachResident key={`reoqsccncdd${index}${Date.now()}`} rawData={key} />
                            })
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            What time do you need to pay the dormitory fee?
                        </Typography>
                        <Typography>
                            Usually around June and December every year. We will notify you 1 month in advance for you to prepare.                             </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            Are there errors in this data?
                             </Typography>
                        <Typography>
                            Let us know at iu-dormitory@gmail.com
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
    </main>
}

export default Account;