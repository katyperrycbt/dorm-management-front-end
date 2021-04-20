
import useStyles from './styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import PaymentIcon from '@material-ui/icons/Payment';

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';


function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const UtilityIcon = ({active}) => {
    const classes = useStyles();

    return <AvatarGroup max={2}>
        <Avatar alt="Electricity" src="" className={classes.fit}>
            <OfflineBoltIcon className={active ? classes.color : classes.gray} />
        </Avatar>
        <Avatar alt="Water" src="" className={classes.fit}>
            <InvertColorsIcon className={active ? classes.color : classes.gray} />
        </Avatar>
    </AvatarGroup>
}


const BillTabs = ({ activeTab, setActiveTab }) => {
    const classes = useStyles();

    const handleChange = (event, value) => {
        setActiveTab(value)
    }

    return <div className={classes.root}>
        <AppBar position="static" color="default">
            <Tabs
                value={activeTab}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
            >
                <Tab label="Residence Bills" icon={<LocalHotelIcon />} {...a11yProps(0)} />
                <Tab label="Utility Bills" icon={<UtilityIcon active={activeTab === 1}/>} {...a11yProps(1)} />
                <Tab label="Unpaid Bills" icon={<PaymentIcon />} {...a11yProps(2)} />
            </Tabs>
        </AppBar>
    </div>
}

export default BillTabs;