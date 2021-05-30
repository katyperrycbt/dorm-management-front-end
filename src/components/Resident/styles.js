import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 0,
        padding: theme.spacing(0),
        '& > *': {
            // padding: theme.spacing(2),
            width: '100%',
            height: '100%'
        },
    }
}));