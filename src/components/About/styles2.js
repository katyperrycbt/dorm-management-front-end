import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginTop: theme.spacing(10),
            width: '100%',
            height: '100%',
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: 'hidden',
        zIndex: 100,
        padding: 0,
        paddingBottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            // padding: theme.spacing(1),
        },
        [theme.breakpoints.down('xs')]: {
            // padding: theme.spacing(1),
        },
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    container: {
        paddingBottom: theme.spacing(4),
        backgroundColor: 'white',
        borderRadius: '10px',
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(1),
        margin: 0
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    under: {
        cursor: 'pointer',
        '&:hover': {
            'text-decoration': 'underline'
        }
    },
    stik: {
        position: 'fixed',
        top: 75,
        width: '23.65%'
    },
    shadow: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#eeeeee',
        },
    },
    [theme.breakpoints.down('sm')]: {
        stik: {
            top: 75,
            width: '25%',
        }
    },
    [theme.breakpoints.down('xs')]: {
        stik: {
            top: 75,
            width: '72%',
        }
    }
}));