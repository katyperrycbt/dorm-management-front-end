import { Grid } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import useStyles from './styles';
import CustomButton from '../CustomButton/CustomButton';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';


const Services = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container} container alignItems="stretch" justify="space-between" spacing={1}>
            <Grid key='interactive2' item xs={6} sm={4} md={3} className={classes.centered}>
                <CustomButton content='Interactive' icon={<FlashOnIcon fontSize="large" />} />
            </Grid>
            <Grid key='resident2' item xs={6} sm={4} md={3} className={classes.centered}>
                <CustomButton content='Resident' icon={<LocalHotelIcon fontSize="large" />} />
            </Grid>
            <Grid key='bill2' item xs={6} sm={4} md={3} className={classes.centered}>
                <CustomButton content='Bills' icon={<ReceiptIcon fontSize="large" />} />
            </Grid>
            <Grid key='fix2' item xs={6} sm={4} md={3} className={classes.centered}>
                <CustomButton content='Repairs' icon={<SettingsApplicationsIcon fontSize="large" />} />
            </Grid>
            <Grid key='checkout2' item xs={6} sm={4} md={3} className={classes.centered}>
                <CustomButton content='Checkout' icon={<AssignmentReturnIcon fontSize="large" />} />
            </Grid>
        </Grid>
    )
}

export default Services;