import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    img: {
        borderRadius: '30px',
    },
    [theme.breakpoints.down('xs')]: {
        mainGrid: {
            flexDirection: 'column-reverse'
        }
    }
}));