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

const ResidentBill = ({ open, billList }) => {
    const classes = useStyles();

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Residence Bill</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Below are your residential bills, please provide them upon request.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        {
                            billList.length === 0 &&
                            <Typography align="center" style={{ color: '#3f51b5' }}>No data!</Typography>

                        }
                        {
                            billList.map((key, index) => {
                                return <Each key={`reoqssbillcncdd${index}${Date.now()}`} rawData={key} inputColor='#b2a429' />
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

export default ResidentBill;