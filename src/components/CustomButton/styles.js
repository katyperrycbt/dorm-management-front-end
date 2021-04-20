import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    padding: '3px',
    borderRadius: '10px'
  },
  customWidth: {
    width: '100%',
    height: '100%',
    padding: '10px',
  },
  // [theme.breakpoints.down('md')]: {
  //   customWidth: {
  //     width: 'fit-content', 
  //     height: 'fit-content'
  //   },
  // },
  outlined: {
    border: '1px solid red',
    borderRadius: '10px'
  },
  color: {
    color: 'white',
    opacity: 1.0,
    width: '100%',
    height: '100%',
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    borderRadius: '6px',
    '&:hover': {
      opacity: 0.5,

    },
    position: 'relative',
  }
}));