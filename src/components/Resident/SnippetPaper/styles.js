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
    heading: {
        padding: 0,
    },
    space: {
        opacity: 0.0
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflow: 'hidden',
        
        marginTop: theme.spacing(5),
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
        // paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: 'white',
        borderRadius: '10px',
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(1),
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
    heading2: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));