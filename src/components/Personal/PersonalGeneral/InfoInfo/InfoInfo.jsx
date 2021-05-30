import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Info from './Info';

const InfoInfo = ({iter}) => {
    const classes = useStyles();


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