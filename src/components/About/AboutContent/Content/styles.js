import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    background:'rgba(192,192,192,0.5)',
    margin: 10,
    border: '10px solid white',
    borderRadius: '10px',
    boxShadow: '10px 5px 30px #333'
  },
  firstPara: {
    '&:first-letter': {
        fontSize: 40,
    },
    fontWeight: 'bold',
  },
  secondPara: {
    '&:first-letter': {
        fontSize: 40,
    },
    fontWeight: 'bold',
  },
  intro: {
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 20
  }
}));
