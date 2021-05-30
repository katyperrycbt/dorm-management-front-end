import { Grid } from '@material-ui/core';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import Info from './Info';

const InfoInfo = () => {
    const classes = useStyles();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        history.push('/');
        return <></>
    }

    const iter = {
        'Identity': user.info?.name ? user.info.name : '321744444',
        'Date of Birth': user.info?.dob ? user.info.dob : 'September 1st, 2000',
        'Gender': user.info?.sex ? user.info.sex : 'Male',
        'Academic year': user.info?.grade ? user.info.grade : '3',
        'Field of Major': user.info?.field ? user.info.field : 'Computer Science',
        'Folk': user.info?.folk ? user.info.folk : 'Kinh',
        'Religion': user.info?.religion ? user.info.religion : 'None',
        'Country': user.info?.country ? user.info.country : 'Vietnam'
    }

    const IterDraw = () => {
        return <>
            <Info data={iter}/>
        </>
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0} style={{ margin: '0px 0px 0px 0px' }}>
                <IterDraw />
            </Grid>
        </div>
    )
}

export default InfoInfo;