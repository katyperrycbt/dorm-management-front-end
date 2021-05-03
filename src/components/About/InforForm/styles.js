import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root:{
        flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '100%',
    },
    img:{
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));