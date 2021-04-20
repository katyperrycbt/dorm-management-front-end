import { Container, Grid } from '@material-ui/core';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import MyCarousel from '../Carousel/MyCarousel';
import ChipTab from '../ChipTab/ChipTab';
import Services from '../Services/Services';
import Activities from '../Activities/Activities';
import DoneTask from '../_done/DoneTask';

import { useHistory } from 'react-router-dom';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    const history = useHistory();
    const profile = JSON.parse(localStorage.getItem('iu-student'));

    if (!profile) {
        history.push('/login');
        return <></>;
    } else {
        return (
            <Container maxWidth="lg">
                <DoneTask />
                <Grid className={classes.mainGrid} container justify="center" alignItems="center" spacing={3}>
                    <MyCarousel />
                    <ChipTab icon={<SettingsEthernetIcon />} content='SERVICES' />
                    <Grid item>
                        <Services />
                    </Grid>
                    <ChipTab icon={<LocalHospitalIcon />} content='ACTIVITIES' />
                    <Grid item>
                        <Activities />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Home;