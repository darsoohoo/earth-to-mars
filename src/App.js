import React,{ Component } from 'react';
import './App.css';
import Space from './components/Space';
import Timer from './components/Timer';
import ShootingStars from './music/shootingstars.mp3';
import { makeStyles } from '@material-ui/core/styles';
import {Howl} from 'howler';

let sound = new Howl({
  src: ShootingStars
})



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
        seconds: 60,
        unitOfTime: null,
        status: null,
        canStart: null,
        pictureInterval: 1,
        totalTime: 60,
        playMode: 'stop',
        backgroundMode: 'STOPPED'
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.restartTimer = this.restartTimer.bind(this);
}
componentDidMount() {

}

backgroundChanger() {
  this.pictureIncrementer = setInterval(() => {
    this.setState({pictureInterval: this.incrementer(this.state.pictureInterval) })
  }, 7900)
}

incrementer(pictureInterval){
  let interval = pictureInterval + 1;
  if(interval === 8) {
    interval = 1
  }
  return interval
}

componentWillUnmount () {

}

percentComplete() {
  const percentCompletion = (60-this.state.seconds)/60 * 100;
  return percentCompletion;
}

startTimer() {
  if (this.state.status !== 'STARTED' && this.state.seconds === 0) {
    this.setState(() => ({ status: 'STARTED', seconds: 60 }));
    this.interval = setInterval(() => {
        this.setState((prevState) => ({ seconds: this.state.seconds - 1 }));
        if (this.state.seconds === 0) {
            clearInterval(this.interval);
            this.setState(() => ({ status: null }));
            this.stopTimer()
        }
    }, 1000);
}
  if (this.state.status !== 'STARTED') {
      this.setState(() => ({ status: 'STARTED' }));
      this.interval = setInterval(() => {
          this.setState((prevState) => ({ seconds: this.state.seconds - 1 }));
          if (this.state.seconds === 0) {
              clearInterval(this.interval);
              this.setState(() => ({ status: null }));
              this.stopTimer()
          }
      }, 1000);
  }
if(this.state.playMode !== "PLAYING") {
  sound.play();
  this.setState({playMode: "PLAYING"})
}

if(this.state.backgroundMode !== "PLAYING") {
  this.backgroundChanger();
  this.setState({backgroundMode: "PLAYING"})
}



}


stopTimer() {
  if (this.state.status === 'STARTED') {
      clearInterval(this.interval);
      this.setState(() => ({ status: 'STOPPED' }));
  }

  sound.stop();
  this.setState({playMode: "STOPPED"})
  clearInterval(this.pictureIncrementer)
  clearInterval(this.interval);
  this.setState({backgroundMode: "STOPPED"})

}

restartTimer() {
  if(this.state.status === 'STARTED' || this.state.status === 'STOPPED') {
    this.setState(() => ({ status: 'RESTARTED'}))
  }
  clearInterval(this.interval);
  this.setState(() => ({ status: null, timeInterval: null, seconds: 60 }));
  sound.stop();
  this.setState({playMode: "STOPPED"})
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
              seconds={this.state.seconds}
              minutes={this.state.minutes}
              hours={this.state.hours}
              startTimer={this.startTimer}
              stopTimer={this.stopTimer}
              restartTimer={this.restartTimer}


      
          />
          <Space 
              seconds={this.state.seconds}
              minutes={this.state.minutes}
              hours={this.state.hours}
              percentComplete={this.percentComplete()}
          />
  
      </main>
    );
  }
}

export default App;
