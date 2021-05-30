import { useState } from 'react';
import {
    Typography, Container, Grid, Box, Link, Paper,
    Accordion, AccordionSummary, ListItemAvatar, Avatar
} from '@material-ui/core';

import clsx from 'clsx';
import useStyles from './styles2';
import { useSelector } from 'react-redux';

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

const initForm = { oldPassword: '', newPassword: '', reEnterNewPassword: '' };

const Account = ({ open, data }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [formData, setFormData] = useState(initForm);
    const [error, setError] = useState(null);

    const [user, setUser] = useState(useSelector((state) => state.studentAccount));

    if (!user.email) {
        setUser({ email: 'katyperrycbt@gmail.com', password: 'hassssss' });
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>
                    <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Basic information</Typography>
                    <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Here is the information you have provided to us and you are responsible for such disclosure.</Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Paper>
                        {
                            Object.keys(data).map((key, index) => {
                                return (
                                    <Accordion key={`dwjiossccccc${Date.now()}${Math.random()}`}>
                                        <AccordionSummary
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className={classes.heading}>{key}</Typography>
                                            <Typography className={classes.secondaryHeading}>{data[key]}</Typography>
                                        </AccordionSummary>
                                    </Accordion>
                                )
                            })
                        }
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            Can I edit my personal information?
                        </Typography>
                        <Typography>
                            The answer is no, you can't. This information is fixed and provided by you before you join the dormitory.                        </Typography>
                        <Typography variant='h6' style={{ color: '#3f51b5' }}>
                            I declared it right, but the information displayed is wrong, can I make a complaint?                        </Typography>
                        <Typography>
                            Please mails to us with specific content and clearly capture the receipt for verification. Your request will be processed within 1 week.                         </Typography>
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