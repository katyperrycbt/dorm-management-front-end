import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            marginLeft: '-600px',
            width: '600px',
            padding: '20px'
        },
    },
    [theme.breakpoints.down('md')]: {
        root: {
            '& > *': {
                marginLeft: '-300px',
                width: '600px',
                padding: '20px'
            },
        }
    },
    [theme.breakpoints.down('xs')]: {
        root: {
            '& > *': {
                marginLeft: '-150px',
                width: '300px',
                padding: '20px'
            },
        }
    },
}));