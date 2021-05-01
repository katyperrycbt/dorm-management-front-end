import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    paper:{
        height: '70%',
        width: 300,
        marginTop: 100,
    },
}));