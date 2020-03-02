import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from './Button';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const SimplePaper = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper>  </Paper>
        <Paper>  </Paper>
        <Paper>  </Paper>
        <Paper>{props.secondsLeft}</Paper>
        <Button startTime={props.startTime} />
    </div>
  );
}

export default SimplePaper