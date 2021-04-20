import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            padding: theme.spacing(2),
            width: '100%',
            height: '100%',
        },
    },
    typo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    large: {
        width: '100px',
        height: '100px'
    },
    [theme.breakpoints.down('xs')]: {

    }
}));