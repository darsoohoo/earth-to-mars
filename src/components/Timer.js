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
      height: theme.spacing(16)
    },
  },
}));
const h1Style = {
    marginLeft: "20%",
    marginTop:"20%"
}

const SimplePaper = props => {
const classes = useStyles();

  return (
    <div className={classes.root}>
        <Paper><h1 style={h1Style}>{props.seconds}</h1></Paper>
        <Button 
            startTimer={props.startTimer}
            stopTimer={props.stopTimer}
            seconds={props.seconds} 
            restartTimer={props.restartTimer}
        />
    </div>
  );
}

export default SimplePaper