import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(10),
        },
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        justifyContent: 'center'
    },
    root: {
        display: 'flex',
    },
    root2: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        verticalAlign: 'center',
        padding: theme.spacing(2),
    },
    root3: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2),
        height: 'fit-content',
        backgroundImage: 'url(\'background profile.jpg\')',
        borderRadius: '30px',
    },
    root4: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
    },
    large2: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
      },
    [theme.breakpoints.down('md')]: {
        large: {
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
        large2: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    },
    [theme.breakpoints.down('xs')]: {
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        large2: {
            width: theme.spacing(5),
            height: theme.spacing(5),
        },
        root4: {
            flexDirection: 'column'
        }
    }
}));