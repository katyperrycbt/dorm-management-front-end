import Chip from '@material-ui/core/Chip';

import useStyles from './styles';

export default function ChipTab({ icon, content }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        icon={icon}
        label={content}
        clickable
        color="primary"
      />
    </div>
  );
}
