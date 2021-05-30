import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0),
        flexGrow: 1,
        width: '100%',
        '& > *': {
            padding: theme.spacing(2),
            width: '100%',
            height: '100%',
        },
        marginBottom: theme.spacing(3),
        zIndex: 1
    },
    root2: {
        backgroundColor: theme.palette.background.paper,
    },
    fit: {
        width: '27px',
        height: '27px',
    },
    fitParent: {
        // width: '100%',
        // height: '100%',
    },
    color: {
        color: '#3f51b5'
    },
    gray: {
        color: '#757575'
    },
    [theme.breakpoints.down('xs')]: {

    }
}));