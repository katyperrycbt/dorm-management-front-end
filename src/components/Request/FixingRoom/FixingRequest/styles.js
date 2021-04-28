import { makeStyles } from '@material-ui/core/styles';

export default makeStyles ((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'column',
        
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border:'2px solid #000',
        boxShadow: theme.shadows[10],
        padding: theme.spacing(2, 4, 3),
        borderRadius:'20px',
    },
    request:{
        '& > *':{
            margin: theme.spacing(1),
            width: '50ch',
        },
        display: 'flex',
        flexDirection: 'column',
    },
    button:{
        // marginTop: theme.spacing(30),
        // marginRight: theme.spacing(10),
    },
}))