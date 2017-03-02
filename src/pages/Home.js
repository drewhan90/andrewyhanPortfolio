import React, { Component } from 'react';

// Import Assets
import logo from '../logo.svg';
import cloud01 from '../images/cloud01.svg';
import mSun from '../images/sun_morning.svg';
import aSun from '../images/sun_afternoon.svg';
import eSun from '../images/sun_evening.svg';
import moon from '../images/moon.svg';
import birds from '../images/birds.svg';

// Styles
import '../styles/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: null,
      greeting: 'hello!',
      greetingSVG1: mSun,
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
      this.setState({greetingSVG1: mSun})
    }
    // AFTERNOON
    else if(hour >= 12 && hour < 17) {
      this.setState({greeting: 'good afternoon!'})
      this.setState({greetingSVG1: aSun})
    }
    // EVENING
    else if(hour >= 17 && hour < 24) {
      this.setState({greeting: 'good evening!'})
      this.setState({greetingSVG1: eSun})
      this.setState({greetingSVG2: birds})
    }
    // NIGHT
    else {
      this.setState({greeting: 'good night!'})
      this.setState({greetingSVG1: moon})
    }
  }
  render() {
    return (
      <div className="App-container">
        <div className="Home-content">
            <div id="App-svg" className="hidden-sm">
              <img className="SVG-sun" src={this.state.greetingSVG1} alt={this.state.greetingSVG1} />
              <img className="SVG-cloud01" src={this.state.greetingSVG2} alt={this.state.greetingSVG1} />
            </div>
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            </header>
            <h1>{this.state.greeting} <br/>I'm Andrew</h1>
            <h1>{this.state.curTime}</h1>
        </div>
      </div>
    )
  }
}

export default Home;