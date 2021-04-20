import { Grid } from '@material-ui/core';

import useStyles from './styles';

import CustomButton from '../CustomButton/CustomButton';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import GroupIcon from '@material-ui/icons/Group';


const Services = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.container} container justify="space-between" spacing={1}>
            <Grid key='interactive' item xs={6} sm={4} md={5} className={classes.centered}>
                <CustomButton content='Before coming back to the Dormitory' icon={<SettingsBackupRestoreIcon fontSize="large" />} />
            </Grid>
            <Grid key='resident' item xs={6} sm={4} md={5} className={classes.centered}>
                <CustomButton content='Roommates' icon={<GroupIcon fontSize="large" />} />
            </Grid>
        
        </Grid>
    )
}

export default Services;