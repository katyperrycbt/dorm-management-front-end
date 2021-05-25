import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainGrid: {
  },
  root1: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    margin: theme.spacing(3),
    padding: theme.spacing(1),
    borderRadius: '10px'
  },
  root: {
    width: '100%',
    // marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0),
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),

  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));