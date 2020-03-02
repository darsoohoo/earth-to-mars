import React,{ Component } from 'react';
import './App.css';
import Space from './components/Space';
import Timer from './components/Timer';
import { makeStyles } from '@material-ui/core/styles';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        secondsLeft: 60,
        secondsPast: 0,
        minutes: 0,
        hours: 0,
        totalTime: 0,
        pictureInterval: 1
    }
}
componentDidMount() {
  this.pictureIncrementer = setInterval(() => {
    this.setState({pictureInterval: this.incrementer(this.state.pictureInterval) })
  }, 7000)

}


incrementer(seconds){
  let interval = seconds + 1;
  if(interval === 3) {
    interval = 1
  }
  return interval
}

componentWillUnmount () {
  clearInterval(this.myInterval)
  clearInterval(this.pictureIncrementer)

}

percentComplete() {
  const percentCompletion = (this.state.milesPast/this.state.totalMiles) * 100;
  return percentCompletion;
}




  render() {
    const imgUrl = require(`./images/space${this.state.pictureInterval}.jpg`);
    const h4Style = {
      color: "white"
    }
    const mainStyle = {
    paddingLeft: "20px",
    paddingTop: "30px",
    paddingBottom: "30px",  
    backgroundImage: "url(" + imgUrl+ ")",
    backgroundPosition: 'center',
    minHeight:"896px",
    color: "white"}

    const buttonStyle={
      backgroundColor: "white",
      color: "black",
      border: "solid white"
    }
    return (
      <main style={mainStyle}>
          <Timer
              secondsLeft={this.state.secondsLeft}
              secondsPast={this.state.secondsPast}
              minutes={this.state.minutes}
              hours={this.state.hours}
              startTime={this.startTime}
          />
          <Space 
              secondsLeft={this.state.secondsLeft}
              secondsPast={this.state.secondsPast}
              minutes={this.state.minutes}
              hours={this.state.hours}
              percentComplete={this.percentComplete()}
          />
  
      </main>
    );
  }
}

export default App;
