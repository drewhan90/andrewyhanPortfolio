import React, { Component } from 'react';

// Page Contents
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Contact';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: 'home'
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleTimeString(undefined, {hour12: false})
      })
    }, 1000)
  }
  _changeContent(conType) {
    this.setState({contentType: conType})
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header className="Nav-home" onClick={(e) => this._changeContent('home', e)}>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Content type={this.state.contentType}></Content>
          <nav className="App-nav">
            <ul className="row">
              <li className="Nav-about col-4-sm col-0" onClick={(e) => this._changeContent('about', e)}>
                <h3>about</h3>
                <button className="hidden-sm "></button>
              </li>
              <li className="Nav-portfolio col-4-sm col-0" onClick={(e) => this._changeContent('portfolio', e)}>
                <h3>portfolio</h3>
                <button className="hidden-sm"></button>
              </li>
              <li className="Nav-contact col-4-sm col-0" onClick={(e) => this._changeContent('contact', e)}>
                <h3>contact</h3>
                <button className="hidden-sm"></button>
              </li>
              <li className="Nav-resume col-4-sm col-0" onClick={(e) => this._changeContent('resume', e)}>
                <h3>resume</h3>
                <button className="hidden-sm"></button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: null,
      greeting: 'hello!'
    }
  }
  _changeGreet() {
    const hour = new Date().getHours();
    console.log(hour);
    // MORNING
    if(hour >= 5 && hour < 12) {
      this.setState({greeting: 'good morning!'})
    }
    // AFTERNOON
    else if(hour >= 12 && hour < 17) {
      this.setState({greeting: 'good afternoon!'})
    }
    // EVENING
    else if(hour >= 17 && hour < 24) {
      this.setState({greeting: 'good evening!'})
    }
    else {
      this.setState({greeting: 'good night!'})
    }
  }
  componentWillMount() {
    this._changeGreet()
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleTimeString(undefined, {hour12: false})
      })
    }, 1000)
  }
  render() {
    if (this.props.type === 'about') {
      return (
        <About />
      )
    }
    else if (this.props.type === 'portfolio') {
      return (
        <Portfolio />
      )
    }
    else if (this.props.type === 'contact') {
      return (
        <Contact />
      )
    }
    else if (this.props.type === 'resume') {
      return (
        <Resume />
      )
    }
    else {
      return (
        <div className="Home App-content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <h1>{this.state.greeting} <br/> I'm Andrew</h1>
          <h1>{this.state.curTime}</h1>
          <button className="CTA-contact">contact</button>
        </div>
      )
    }
  }
}

export default App;
