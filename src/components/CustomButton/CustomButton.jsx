import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';

const randomHex = () => {
  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

const CustomButton = ({ icon, content }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ background: `linear-gradient(45deg, ${randomHex()} 30%, ${randomHex()} 90%)` }}>
      <IconButton color="primary" className={`${classes.customWidth}`} disableRipple={true} disableFocusRipple={true}>
        <Tab icon={
          icon
        } label={content} className={`${classes.color}`} disableRipple={true} disableFocusRipple={true}/>
      </IconButton>
    </div>
  )
}

export default CustomButton;