import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Fix from './Fix/Fix';
import Return from './Return/Return';
import { Switch, Route, useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom'


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

    return (
        <Container maxWidth='md' style={{ padding: 0 }}>
            <Grid className={classes.requests_root}>
                <Typography variant="h3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#e91e63', marginBottom: '10px' }}>Request</Typography>
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

                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Route exact path='/requests' render={props => <Fix {...props} />} />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Route exact path='/requests/return' render={props => <Return {...props} />} />
                        </TabPanel>
                    </SwipeableViews>
                </Switch>
            </Grid>
        </Container>
    )
}