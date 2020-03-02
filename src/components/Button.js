import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      marginTop: "0px",
      marginBottom: "13px",
      width: "50px",

    },
  },
}));

const ContainedButtons = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.startTime()} variant="contained" color="primary">
        Start
      </Button>
      <Button variant="contained" color="secondary">
        Stop
      </Button>
      <Button variant="contained">Reset</Button>

    </div>
  );
}

export default ContainedButtons;