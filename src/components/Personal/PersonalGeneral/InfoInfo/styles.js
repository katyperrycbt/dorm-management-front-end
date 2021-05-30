import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        '& > *': {
            marginTop: theme.spacing(2),
        },
        flexDirection: 'column',
        alignItems: 'center',
        // paddingTop: theme.spacing(2),
        // paddingBottom: theme.spacing(2),
        margin: 0,
        color: 'white'
    },
    root2: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        background: 'linear-gradient(45deg, #FF80FF 30%, #F3C5F3 90%)',
        padding: '7px'
    },
    root3: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        background: 'linear-gradient(45deg, #A6C4E9 30%, #6AADFF 90%)',
        padding: '7px'
    },
    root6: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    space: {
        opacity: 0.0,
        padding: 0,
        margin: 0,
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