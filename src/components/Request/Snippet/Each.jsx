import { useState } from 'react';
import {
    Typography, Container, Grid, Paper,
    Accordion, AccordionSummary, AccordionDetails, Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import clsx from 'clsx';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { SET_SNACK, SET_LINEAR } from '../../../constants/constants';
import { studentDeleteRequestFix } from '../../../actions/student.request';

const Account = ({ open, rawData, inputColor }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const dispatch = useDispatch();


    const [user, setUser] = useState(useSelector((state) => state.studentAccount));

    const currentId = rawData['details']?._id ? rawData['details']._id : '';

    if (!user.email) {
        setUser({ email: 'katyperrycbt@gmail.com', password: 'hassssss' });
    }

    const handleDelete = () => {

        if (currentId) {
            dispatch({ type: SET_LINEAR, data: true });
            dispatch(studentDeleteRequestFix(currentId)).then((rs) => {
                dispatch({ type: SET_LINEAR, data: false });
                if (rs?.message) {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: rs.message
                        }
                    });

                } else {
                    dispatch({
                        type: SET_SNACK, data: {
                            open: true,
                            msg: 'Done!'
                        }
                    });
                }
            }).catch((err) => {
                dispatch({ type: SET_LINEAR, data: false });
                dispatch({
                    type: SET_SNACK, data: {
                        open: true,
                        msg: 'Oops! Fail to delete, try again!'
                    }
                });

            });
        } else {
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: 'Missing data, please try again!'
                }
            });
        }
    }

    return <main className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}>
        {/* <div className={classes.appBarSpacer} /> */}
        <Container maxWidth={'lg'} className={classes.container} style={{ margin: 0 }}>
            <Grid container spacing={3} style={{ padding: '5px' }}>
                <Grid item xs={12}>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={`panel1a-hessssss${Date.now()}ader`}
                            style={{ backgroundColor: inputColor }}
                        >
                            <Typography align="center" style={{ color: '#fff' }}>{rawData['header']}</Typography>
                        </AccordionSummary>
                        <AccordionDetails classes={{ root: classes.cc }}>
                            <Paper>
                                {
                                    Object.keys(rawData['details']).map((key, index) => {
                                        return (<>
                                            <Accordion key={`dwjiossqqqqqqqqqccccc${Date.now()}${Math.random()}`}>
                                                <AccordionSummary
                                                    aria-controls="panel1bh-content"
                                                    id="panel1bh-header"
                                                    style={{ display: 'block', overflow: 'auto' }}
                                                >
                                                    <Typography className={classes.heading} >{key}</Typography>
                                                    {
                                                        key === 'image' ? <img src={rawData['details']['image']} alt='swww' style={{ maxHeight: '200px' }} />
                                                            : <Typography className={classes.secondaryHeading}>{rawData['details'][key]}</Typography>
                                                    }
                                                </AccordionSummary>
                                            </Accordion>
                                        </>
                                        )
                                    })
                                }
                                {/* <Accordion key={`dwjiossqqqqqqqqqccccc${Date.now()}${Math.random()}`}>
                                    <Button className={classes.heading} >Delete</Button>
                                </Accordion> */}
                                <Accordion key={`dwjiossqqqqqqqqqccccc${Date.now()}${Math.random()}`}>
                                    <AccordionSummary
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                        style={{ display: 'block', overflow: 'auto' }}
                                    >
                                        <Typography className={classes.heading} >Delete this request</Typography>
                                        <Button className={classes.secondaryHeading} onClick={handleDelete}>Delete</Button>
                                    </AccordionSummary>
                                </Accordion>
                            </Paper>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    </main>
}

export default Account;