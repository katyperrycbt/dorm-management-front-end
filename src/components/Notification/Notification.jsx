import { Container, Typography, Grid, Paper, Box, Link } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { see } from '../../actions/student.see';
import { STUDENT_SEE_NOTIFICATIONS, SET_LINEAR, SET_SNACK } from '../../constants/constants';
import useStyles from './styles';
import clsx from 'clsx';
import Each from './Snippet/Each';

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

const Notification = ({ open }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Loading...'
            }
        });
        dispatch(see(STUDENT_SEE_NOTIFICATIONS)).then((rs) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Done!'
                }
            });
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }, [dispatch]);

    // const notifications = useSelector((state) => state.studentSee);

    const sample = [
        {
            'to': 'all',
            'title': 'Welcome letter',
            'content': `
## Welcome to IU Dormitory
            
**From: Dormitory Management Board**
            
**To: Student**
            
**Content:**
            
Hi there,
            
We are very honored to welcome you to stay and live and study in the dormitory. We hope you feel comfortable here with your new friends and feel warm away from home.
            
We believe that we always strive to bring you the most comfortable and pleasant things, because we think a good result, a good person emerges from a good environment.
            
If you have a problem, about your roommate, about your furniture, about damaged equipment or financial problems, you can immediately contact us via email or O.999 office. We will try to help you as much as we can.
Again, welcome to the dorm.
            
Best regards,
            
Dormitory Management Board

`

        },
        {
            'to': 'you',
            'title': 'Notice of repair request',
            'content': `
### Dear Students,

***Your repair request has been accepted. However, the replacement item is not available, we have requested to purchase the device from the supplier. Therefore, the repair time may be longer than expected but not more than 10 days.***

We are very sorry for this inconvenience, sincerely apologize and ask for your understanding.

Best regards,

Dormitory Management Board `
        }
    ];

    const notifications = [
        {
            'header': sample[0]['title'],
            'details': sample[0]['content']
        },
        {
            'header': sample[1]['title'],
            'details': sample[1]['content']
        }
    ]

    return (
        <Container maxWidth='lg' className={classes.root}>
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
                    <Grid container spacing={3} style={{ padding: '5px' }}>
                        <Grid item xs={12}>
                            <Typography align="center" variant='h2' style={{ color: '#3f51b5' }}>Notifications</Typography>
                            <Typography align="center" variant='h5' style={{ color: '#f44336' }}>Below are the hostel announcements and emails sent to you only.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Paper>
                                {
                                    notifications.length === 0 && <Typography align="center" style={{ color: '#f44336' }}>No notifications.</Typography>

                                }
                                {
                                    notifications.map((key, index) => {
                                        return <Each key={`reoqscnoticncdd${index}${Date.now()}`} rawData={key} />
                                    })
                                }
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={0} style={{ border: '1px solid #f44336', borderRadius: '5px', padding: '5px' }}>
                                <Typography variant='h6' style={{ color: '#3f51b5' }}>
                                    Regulations for students, for general notices.
                                </Typography>
                                <Typography>
                                    Require students to comply with new regulations, if any, we will notify you via this mailbox with direct propaganda.
                                </Typography>
                                <Typography variant='h6' style={{ color: '#3f51b5' }}>
                                    For private notices.
                                </Typography>
                                <Typography>
                                    It can be a letter requesting payment (insurance, utility bill...) or reply to a complaint or a letter of encouragement, etc. Students should quickly update their information.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </Container>
    )
}

export default Notification;
