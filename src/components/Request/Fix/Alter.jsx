import { useState } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './styles2';
import Each from '../Snippet/Each';
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import ModalForm from './ModalForm/ModalForm';

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

const ResidentBill = ({ open, requests }) => {
    const classes = useStyles();
    const [newRequest, setNewRequest] = useState(false);

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <ModalForm open={newRequest} setOpen={setNewRequest} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>
                    <Tooltip title='Make request' className={classes.newButton}>
                        <Fab
                            color='primary'
                            onClick={() => setNewRequest(true)}
                        >
                            <EditIcon />
                        </Fab>
                    </Tooltip>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" variant='h3' style={{ color: '#3f51b5' }}>Fix Requests</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Here are your repair requests.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        {
                            requests.length === 0 &&
                            <Typography align="center" style={{ color: '#3f51b5' }}>No data!</Typography>

                        }
                        {
                            requests.map((key, index) => {
                                return <Each key={`reoqssbillcncdd${index}${Date.now()}`} rawData={key} inputColor='#2979ff' />
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