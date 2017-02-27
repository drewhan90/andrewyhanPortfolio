import React, { Component } from 'react';

// Components

// Page Contents
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import logo from './logo.svg';
import cloud01 from './images/cloud01.svg';
import sun from './images/sun.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: 'home',
      display: 'hidden'
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    
    // Change Time
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleTimeString(undefined, {hour12: false})
      })
    }, 1000)

  }
  _changeContent(conType) {
    this.setState({contentType: conType})
    if( conType !== 'home') {
      this.setState({display: 'show'})
    }
    else {
      this.setState({display: 'hidden'})
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <header ref="mainHeader" className={this.state.display} onClick={(e) => this._changeContent('home', e)}>
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
      greeting: 'hello!',
      svgMorning: 'hidden',
      svgAfternoon: 'hidden'
    }
  }
  componentWillMount() {
    this._changeGreet();
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleTimeString(undefined, {hour12: false})
      })
    }, 1000)
    // Change SVG
    this._changeSVG();
  }
  _changeGreet() {
    const hour = new Date().getHours();
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
  _changeSVG() { // todo: svg for afternoon (birds), evening (red sun), night (moon star cloud)
    if(this.state.greeting === 'good morning!') {
      this.setState({svgMorning: 'hidden-sm'})
    }
    else if(this.state.greeting === 'good afternoon!') {
      this.setState({svgAfternoon: 'hidden-sm'})
    }
    else if(this.state.greeting === 'good evening!') {
      this.setState({svgMorning: 'hidden-sm'})
    }
    else if(this.state.greeting === 'good night!') {
      this.setState({svgAfternoon: 'hidden-sm'})
    }

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
          <div id="App-svg" className={this.state.svgMorning}>
            <img className="SVG-sun" src={sun} alt="sun" />
            <img className="SVG-cloud01" src={cloud01} alt="cloud" />
          </div>
          <div id="App-svg" className={this.state.svgAfternoon}>
            <img className="SVG-sun" src={sun} alt="sun" />
          </div>
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
