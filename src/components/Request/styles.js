import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    Requests_root:{
        // backgroundColor: theme.palette.background.black,
        background:'rgba(192,192,192,0.6)',
        width: 800,
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(10),
        '& > *': {
            marginLeft: theme.spacing(0),
            width: '100%',
            height: '100%',
        },
    },
}));