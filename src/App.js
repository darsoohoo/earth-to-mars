import React,{ Component } from 'react';
import Space from './components/Space';

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
}

componentWillUnmount () {
  clearInterval(this.myInterval)
}

calcMilesPast(seconds) {
  this.state.milesPast = this.state.milesPast + 0.555556;
  return parseFloat(this.state.milesPast, 10);
  
}

calcMilesLeft(seconds) {
  this.state.milesLeft = this.state.milesLeft - 0.555556;       
  return parseFloat(this.state.milesLeft, 10);
}

  render() {

    const appStyle = {
      marginLeft: "30px",
      marginRight: "30px",
      marginTop: "20px",
    }
    return (
      <div style={appStyle} >
         <h4>48,000,000 mile drive to Mars @2000mph</h4>
         <h4>Start Date: 2/29/2020 - End Date: 2.73972602739726 years</h4>
          <Space 
                  secondsLeft={this.state.secondsLeft}
                  secondsPast={this.state.secondsPast}
                  minutes={this.state.minutes}
                  hours={this.state.hours}
                  totalMiles={this.state.totalMiles}
                  milesLeft={this.state.milesLeft}
                  milesPast={this.state.milesPast}
          />
  
      </div>
    );
  }
}

export default App;
