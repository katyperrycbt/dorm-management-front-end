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

const UtilityBill = ({ open, billList }) => {
    const classes = useStyles();

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Utility Bill</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Below are your utility bills, please provide them upon request.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        {
                            billList.length === 0 &&
                            <Typography align="center" style={{ color: '#3f51b5' }}>No data!</Typography>

                        }
                        {
                            billList.map((key, index) => {
                                return <Each key={`reoqssbillcncdd${index}${Date.now()}`} rawData={key} inputColor='#008394' />
                            })
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            How is the price of electricity and water calculated?                        </Typography>
                        <Typography>
                            Based on the first and last indexes collected at the end of each month, together with the price list of electricity and water according to regulations in the dormitory.
                        </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            Payment time
                        </Typography>
                        <Typography>
                            From the 29th of each month to the 5th of the following month.
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

export default UtilityBill;