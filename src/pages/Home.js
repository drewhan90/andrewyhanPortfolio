import React, { Component } from 'react';

// Import Assets
import logo from '../logo.svg';
import cloud01 from '../images/cloud01.svg';
import sun from '../images/sun.svg';

// Styles
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: null,
      greeting: 'hello!',
      greetingSVG1: sun,
      greetingSVG2: cloud01
    }
  }
  componentWillMount() {
      this._changeGreet();
  }
  componentDidMount() {
    this.interval = setInterval(() => this._setCurTime(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval); // Clear Interval after unmount
  }
  // Homepage show time in interval
  _setCurTime() {
    this.setState(() => ({
      curTime: new Date().toLocaleTimeString(undefined, {hour12: false})
    }));
  }
  // Change Home Greeting according to current time
  _changeGreet() {
    const hour = new Date().getHours();
    // MORNING
    if(hour >= 5 && hour < 12) {
      this.setState({greeting: 'good morning!'})
      this.setState({svgMorning: 'hidden-sm'})
    }
    // AFTERNOON
    else if(hour >= 12 && hour < 17) {
      this.setState({greeting: 'good afternoon!'})
      this.setState({svgAfternoon: 'hidden-sm'})
    }
    // EVENING
    else if(hour >= 17 && hour < 24) {
      this.setState({greeting: 'good evening!'})
      this.setState({svgMorning: 'hidden-sm'})
    }
    // NIGHT
    else {
      this.setState({greeting: 'good night!'})
      this.setState({svgAfternoon: 'hidden-sm'})
    }
  }
  render() {
    return (
    <div className="Home App-content">
        <div id="App-svg" className="">
        <img className="SVG-sun" src={this.state.greetingSVG1} alt={this.state.greetingSVG1} />
        <img className="SVG-cloud01" src={this.state.greetingSVG1} alt={this.state.greetingSVG1} />
        </div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.state.greeting} <br/>I'm Andrew</h1>
        <h1>{this.state.curTime}</h1>
    </div>
    )
  }
}

export default Home;