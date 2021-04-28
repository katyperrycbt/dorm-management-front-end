import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    Requests_fixing:{
        // backgroundColor: theme.palette.background.black,
        background:'none',
        width: 650,
        minHeight: 500,
        display: "flex",
        flexDirection: "column",
        marginTop: theme.spacing(0),
        '& > *': {
            padding: theme.spacing(0),
            width: '100%',
            height: '100%',
        },
    },
    fab:{
        position:'fixed',
        top: theme.spacing(5),
        right: theme.spacing(1),
        width: 80,
        height: 80,
    },
    popover:{
        pointerEvents: 'none',
    },
    paper:{
        padding: theme.spacing(1),
    },
}));