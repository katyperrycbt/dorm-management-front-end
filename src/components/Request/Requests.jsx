import React from 'react';
import useStyles from './styles';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

import Fix from './Fix/Fix';
import Return from './Return/Return';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    return (
        <Container maxWidth='md'>
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
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <Fix />
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <Return />
                        </TabPanel>

                    </SwipeableViews>
            </Grid>
        </Container>
    )
}