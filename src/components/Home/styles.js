import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    custom: {
        backgroundColor: 'yellow',
        color: '#3f51b5'
      }
}));