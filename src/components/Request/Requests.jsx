import React, { useEffect } from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Fix from './Fix/Alter';
import Return from './Return/Alter';

import { Switch, Route, useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'

import {
    studentGetRequestFix,
    studentGetRequestReturn
} from '../../actions/student.request';

import { useDispatch, useSelector } from 'react-redux';

import {
    SET_LINEAR, SET_SNACK,
} from '../../constants/constants';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    childre: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function Requests() {
    const classes = useStyles();
    const theme = useTheme();
    const location = useLocation();
    const [value, setValue] = React.useState(location?.pathname === '/requests' ? 0 : 1);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: SET_LINEAR, data: true });
        dispatch({
            type: SET_SNACK, data: {
                open: true,
                msg: 'Loading...'
            }
        });
        dispatch(studentGetRequestFix()).then((rs) => {
            dispatch(studentGetRequestReturn()).then((rs) => {
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
        }).catch((err) => {
            dispatch({ type: SET_LINEAR, data: false });
            dispatch({
                type: SET_SNACK, data: {
                    open: true,
                    msg: err.message
                }
            })
        })
    }, [dispatch])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                history.push('/requests');
                break;
            case 1:
                history.push('/requests/return');
                break;
            default:
                history.push('/requests');
        }
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const requestFix = useSelector((state) => state.studentRequestFix);
    const requestReturn = useSelector((state) => state.studentRequestReturn);
    console.log('request FIXXXXX', requestFix);
    console.log('requestReturnnnnnnnnn', requestReturn);

    let data = [];

    if (requestFix) {
        for (let i = 0; i < requestFix.length; i++) {
            const tempHeader = `${requestFix[i]['fixnote'].slice(0, Math.floor(requestFix[i]['fixnote'].length * 0.5))}..., Status: ${requestFix[i]['accept'] === true ? 'Fixed' : 'Not fixed yet'}`
            const tempDetails = {
                content: requestFix[i]?.fixnote ? requestFix[i].fixnote : 'Not found',
                image: requestFix[i]?.image ? requestFix[i].image : 'Not found',
                status: requestFix[i]['accept'] === true ? 'Fixed' : 'Not fixed yet'
            }

            data.push({
                'header': tempHeader,
                'details': tempDetails
            });
        }
    }
    console.log('dataaaa', data);
    // const sampleFixData = [
    //     {
    //         content: 'The exhaust fan in the bathroom is broken, hope to fix it soon',
    //         image: 'https://5.imimg.com/data5/MO/SY/MY-910920/kitchen-exhaust-fan-500x500.jpg',
    //         status: 0
    //     },
    //     {
    //         content: 'Leaking shower',
    //         image: 'https://cdn.vox-cdn.com/thumbor/10e8adIKzirF5E70DoSbxQr-_MM=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65890483/iStock_1176125291.9.jpg',
    //         status: 1
    //     }
    // ];

    // const sampleFix = [
    //     {
    //         'header': `${sampleFixData[0]['content'].slice(0, Math.floor(sampleFixData[0]['content'].length * 0.5))}..., Status: ${sampleFixData[0]['status'] === 0 ? 'Not fixed yet' : 'Fixed'}`,
    //         'details': sampleFixData[0]
    //     },
    //     {
    //         'header': `${sampleFixData[1]['content'].slice(0, Math.floor(sampleFixData[1]['content'].length * 0.5))}..., Status: ${sampleFixData[1]['status'] === 0 ? 'Not fixed yet' : 'Fixed'}`,
    //         'details': sampleFixData[1]
    //     }
    // ];

    return (
        <Container maxWidth='md' style={{ padding: 0 }}>
            <Grid className={classes.requests_root}>
                <Typography variant="h2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#3f51b5', marginBottom: '10px' }}>Request</Typography>
                <AppBar position="static" color="default" style={{ borderRadius: "10px", zIndex: 1, }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="none"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs"
                    >
                        <Tab label="Fix Request" {...a11yProps(0)}></Tab>
                        <Tab label="Return Request" {...a11yProps(1)}></Tab>
                    </Tabs>
                </AppBar>
                <Switch>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >

                        <TabPanel value={value} index={0} dir={theme.direction} style={{ padding: 0 }}>
                            <Route exact path='/requests' render={props => <Fix {...props} requests={data} />} />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Route exact path='/requests/return' render={props => <Return {...props} data={requestReturn} />} />
                        </TabPanel>
                    </SwipeableViews>
                </Switch>
            </Grid>
        </Container>
    )
}