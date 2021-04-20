import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            marginTop: theme.spacing(10),
            width: '100%',
            height: '100%',
        },
    },
    heading: {
        padding: 0,
    },
    space: {
        opacity: 0.0
    }
}));