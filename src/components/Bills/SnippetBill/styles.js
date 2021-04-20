import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: '100%',
            height: '100%',
        },
    },
    heading: {
        padding: 0,
    },
    space: {
        opacity: 0.0
    },
    common: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        overflow: 'hidden',
        width: '100%',
        padding: 0,
        margin: 0
    },
    paid: {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        width: '100%', 
        height: '100%',
        borderRadius: '10px'
    },
    [theme.breakpoints.down('xs')]: {
        common: {
            flexDirection: 'column'
        }
    }
}));