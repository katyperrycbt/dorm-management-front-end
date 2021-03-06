import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  linearProgress: {
    width: '100%',
    padding: 0,
    // margin: '-5px'
    '& > * + *': {
      marginTop: theme.spacing(0),
    },
  },
  customColor: {
    backgroundColor: '#4527a0'
  },
  customColor2: {
    backgroundColor: '#b39ddb'
  },
  zzz : {
    zIndex: 100000
  },
  [theme.breakpoints.down('xs')]: {
    mainGrid: {
      flexDirection: 'column-reverse'
    }
  }
}));