import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    requests_root: {
        backgroundColor: theme.palette.background.black,
        background:'rgba(192,192,192,0.6)',
        marginBottom: theme.spacing(5),
        justifyContent: 'center',
        borderRadius: '10px',
        '& > *': {
            marginLeft: theme.spacing(0),
            width: '100%',
            height: '100%',
        },
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
}));