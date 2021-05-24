import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import useStyles from './styles';
import {useHistory} from 'react-router-dom';

const InfoGeneral = ({toggle, setToggle}) => {
    const classes = useStyles();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        history.push('/');
        return <></>
    }

    const handleChange = (e, newValue) => {
        setToggle(newValue);
        console.log(newValue);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={toggle}
                    onChange={handleChange}
                    variant="scrollable"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="General information" icon={<EmojiPeopleIcon />}  />
                    <Tab label="Contact information" icon={<ContactPhoneIcon />}  />
                </Tabs>
            </AppBar>
        </div>
    )
}

export default InfoGeneral;