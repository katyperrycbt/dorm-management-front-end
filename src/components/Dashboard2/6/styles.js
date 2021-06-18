import { makeStyles } from '@material-ui/core/styles';
const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'absolute',
        left: 0,
        width: '100%',
        top: 1000
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: `${drawerWidth}px !important`,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        // zIndex: -1
        backgroundColor: '#ffffff',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
        // zIndex: -1
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `${-drawerWidth + 60}px`,
        backgroundColor: '#dfdbe5',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        overflow: 'auto',
        zIndex: 1200,
        marginTop: theme.spacing(1),
        padding: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: `${-drawerWidth}px`,
            padding: theme.spacing(1),
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
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        backgroundColor: 'white',
        borderRadius: '10px',
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
    vertical: {
        [theme.breakpoints.up('md')]: {
            display: ''
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },
    horizontal: {
        [theme.breakpoints.up('md')]: {
            display: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            display: ''
        },
    },
    fullWidddddth: {
        '.MuiTabPanel-root': {
            width: '100% !important'
        }
    },
    hv: {
        '&:hover': { filter: 'brightness(1.75)' }
    },
    cusss: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }
}));