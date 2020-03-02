import React,{ Component } from 'react';
import Space from './components/Space';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        secondsLeft: 86400000,
        secondsPast: 0,
        minutes: 0,
        hours: 0,
        totalMiles: 48000000,
        milesLeft: 48000000,
        milesPast: 0,
        pictureInterval: 1
    }
}
componentDidMount() {
  this.myInterval = setInterval(()=>{
      this.setState(prevState => ({
          secondsLeft: this.state.secondsLeft - 1,
          secondsPast: this.state.secondsPast + 1,
          milesPast: this.calcMilesPast(this.state.secondsPast),
          milesLeft: this.calcMilesLeft(this.state.secondsPast)
      }))
  }, 1000)


  this.pictureIncrementer = setInterval(() => {
    this.setState({pictureInterval: this.incrementer(this.state.pictureInterval) })
  }, 7000)

}


incrementer(seconds){
  let interval = seconds + 1;
  if(interval === 8) {
    interval = 1
  }
  return interval
}


componentWillUnmount () {
  clearInterval(this.myInterval)
  clearInterval(this.pictureIncrementer)

}

calcMilesPast(seconds) {
  this.state.milesPast = this.state.milesPast + 0.555556;
  return parseFloat(this.state.milesPast, 10);
  
}

calcMilesLeft(seconds) {
  this.state.milesLeft = this.state.milesLeft - 0.555556;       
  return parseFloat(this.state.milesLeft, 10);
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
    backgroundSize: 'cover',
    minHeight:"896px",
    color: "white"}
    
    return (
      <main style={mainStyle}>
         <h4 style={h4Style}>48,000,000 mile drive to Mars @2000mph</h4>
         <h4 style={h4Style}>Start Date: 3/1/2020 - End Date: 2.73972602739726 years</h4>
          <Space 
                  secondsLeft={this.state.secondsLeft}
                  secondsPast={this.state.secondsPast}
                  minutes={this.state.minutes}
                  hours={this.state.hours}
                  totalMiles={this.state.totalMiles}
                  milesLeft={this.state.milesLeft}
                  milesPast={this.state.milesPast}
                  percentComplete={this.percentComplete()}
          />
  
      </main>
    );
  }
}

export default App;
