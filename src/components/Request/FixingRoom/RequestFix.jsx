import React from 'react';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { open} from './FixingRequest/open';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Popover from '@material-ui/core/Popover';

import RoomFixing from './RequestList/RoomFixing';
import RequestForm from './FixingRequest/RequestForm';
import ApprovedList from './ApprovedList/ApprovedList';






function TabPanel(props){
    const { children, value, index, ...other } = props;

    return(
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

function a11yProps(index){
    return{
        id: `full-width-tab-${index}`,
        'aria-controls':`full-width-tabpanel-${index}`,
    };
}

export default function RequestFix() {
    const classes = useStyles();
    const theme = useTheme();
    const [ value, setValue ] = React.useState(0);
    const [ anchorEl, setAnchorEl ] = React.useState(null);

    // const isOpen = useSelector((state) => state.isOpen.openState);
    const dispatch = useDispatch();

    const list = useSelector((state) => state.RequestList.list);

    const handleOpen = () =>{dispatch(open());}
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const handleChangeIndex = (index) => {
        setValue(index);
    }

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handlePopoverClose = () => {
        setAnchorEl(null);
    }

    const PopoverOpen = Boolean(anchorEl);

    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <EditIcon />,
            label: 'Make Request',
        },
    ];

    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };

    return(
        <Container maxWidth='lg' className={classes.Requests_fixing}>
            <AppBar position="static" color="default" style={{borderRadius: "10px"}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="none"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs"
                >
                    <Tab label="Fixing Requests" {...a11yProps(0)}></Tab>
                    <Tab label="Information" {...a11yProps(1)}></Tab>
                    {/* <Tab label="Item Three" {...a11yProps(2)}></Tab> */}
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction} style={{minHeight: 500,}}>
                    <Typography>Fixing request list</Typography>
                    {list.map((request) => (<RoomFixing key={request.id} title={request.title} image={request.image} id={request.id} approve={request.approve}/>))}
                    {fabs.map((fab, index) => (
                        <Zoom
                            key={fab.color}
                            in={value === index}
                            timeout={transitionDuration}
                            style={{
                                transitionDelay: `${value === index ? transitionDuration.exit: 0}ms`,
                            }}
                            unmountOnExit
                        >
                            <Fab 
                                aria-label={fab.label} 
                                className={fab.className} 
                                color={fab.color} 
                                onClick={handleOpen}
                                onMouseEnter={handlePopoverOpen}
                                onMouseLeave={handlePopoverClose}
                                // style={{position: 'sticky'}}
                            >
                                {fab.icon}
                            </Fab>
                        </Zoom>
                    ))}
                    <Popover
                        id="mouse-over-popover"
                        className={classes.popover}
                        classes={{paper: classes.paper,}}
                        open={PopoverOpen}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        onClose={handlePopoverClose}
                        disableRestoreFocus
                    >
                        <Typography>Create a request for fixing</Typography>
                    </Popover>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Typography>Information list</Typography>
                    <ApprovedList />
                </TabPanel>

            </SwipeableViews>

            <RequestForm />
        </Container>
    )
}