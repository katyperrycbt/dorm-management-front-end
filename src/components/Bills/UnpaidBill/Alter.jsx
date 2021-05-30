import { useState } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './styles';
import Each from '../SnippetBill/Each';

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

const UnpaidBill = ({ open, billList }) => {
    const classes = useStyles();

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Unpaid Bill</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Below are your unpaid bills, please pay as soon as possible.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        {
                            billList.length === 0 &&
                            <Typography align="center" style={{ color: '#3f51b5' }}>No data!</Typography>

                        }
                        {
                            billList.map((key, index) => {
                                return <Each key={`reoqssbillcncdd${index}${Date.now()}`} rawData={key} inputColor='#b2102f' />
                            })
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            I have a payment problem: financial problem, travel problem, payment method problem...
                        </Typography>
                        <Typography>
                            Please contact us via email as soon as possible for timely assistance.                                </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            You paid but the invoice still shows up here?
                        </Typography>
                        <Typography>
                            Don't worry, we will update the status soon
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

export default UnpaidBill;