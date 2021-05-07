import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    background:'rgba(192,192,192,1)',
    borderRadius: '10px',
    boxShadow: '10px 5px 30px #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  firstPara: {
    fontWeight: 'bold',
    padding: theme.spacing(2),
    textAlign: 'justify',
    paddingTop: '0',
    paddingBottom: '0'
  },
  secondPara: {
    fontWeight: 'bold',
    padding: theme.spacing(2),
    textAlign: 'justify',
    paddingTop: '0',
    paddingBottom: '0'
  },
  intro: {
      textAlign: 'center',
      color: '#3f51b5',
      fontWeight: 'bold',
      padding: theme.spacing(1)
  }
}));
