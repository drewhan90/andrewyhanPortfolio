import React, { Component } from 'react';

// Component
import Content from './Content';

import logo from '../logo.svg';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: 'home',
      visibility: 'visuallyhidden'
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
    this.setState({contentType: conType}, () => {
      this._changeVisibility('home', conType);
    })
  }

  // Display Logo except Home
  _changeVisibility(page, conType) { 
    if( conType === page) {
      this.setState({visibility: 'visuallyhidden'})
    }
    this.setState({visibility: 'display'})
  }
  render() {
    return (
      <div className="App-nav">
          <Content type={this.state.contentType}></Content>
          <nav className="App-menu">
            <ul>
              <li id="Nav-home" className={this.state.visibility} onClick={(e) => this._changeContent('home', e)}>
                <img src={logo} className="App-logo hidden-sm" alt="logo" />
              </li>
              <li id="Nav-about" className="Menu-item" onClick={(e) => this._changeContent('about', e)}>
                <h3>about</h3>
                <button className="Menu-btn hidden-sm "></button>
              </li>
              <li id="Nav-portfolio" className="Menu-item" onClick={(e) => this._changeContent('portfolio', e)}>
                <h3>portfolio</h3>
                <button className="Menu-btn hidden-sm"></button>
              </li>
              <li id="Nav-contact" className="Menu-item" onClick={(e) => this._changeContent('contact', e)}>
                <h3>contact</h3>
                <button className="Menu-btn hidden-sm"></button>
              </li>
              <li id="Nav-resume" className="Menu-item" onClick={(e) => this._changeContent('resume', e)}>
                <h3>resume</h3>
                <button className="Menu-btn hidden-sm"></button>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Nav;
