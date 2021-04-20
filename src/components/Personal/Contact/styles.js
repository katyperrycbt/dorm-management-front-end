import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '2px',
        marginTop: theme.spacing(2),
    },
    title: {
        fontSize: 14,
    },
    space: {
        opacity: 0.0,
        padding: 0,
        margin: 0,
    },
    root2: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: '0px'
    },
    root3: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        padding: '0px',
    },
    root6: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
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
        },
        root2: {
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '0px',
            borderTopRightRadius: '15px'
        },
        root3: {
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px'
        }
    }
}));