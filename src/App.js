import React, { Component } from 'react';
import About from './About';

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
    this._onScroll();
    setInterval( () => {
      this.setState({
        curTime: new Date().toLocaleTimeString(undefined, {hour12: false})
      })
    }, 1000)
  }
  _changeContent(conType) {
    this.setState({contentType: conType})
  }
  _onScroll() {
    window.onscroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = (document.body && document.body.scrollTop)
      const contentArr = ['home', 'about', 'portfolio', 'contact', 'resume'];
      let newCont= '';
      if(scrollTop === -1) {
        console.log("top!");
        contentArr.forEach((value, i) => {
          if(this.state.contentType === value) {
            i -= 1;
            newCont = contentArr[i];
            return newCont;
          }
        });  
        return this._changeContent(newCont);
      }
      else if (totalHeight === (scrollTop + clientHeight)) {
        console.log("bottom!");
        contentArr.forEach((value, i) => {
          if(this.state.contentType === value) {
            i += 1;
            newCont = contentArr[i];
            return newCont;
          }
        });  
        return this._changeContent(newCont);
      }
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-container">
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
    // MORNING
    if(new Date().getHours() >= 5 && new Date().getHours() < 12) {
      this.setState({greeting: 'good morning!'})
    }
    // AFTERNOON
    else if(new Date().getHours() >= 12 && new Date().getHours() < 17) {
      this.setState({greeting: 'good afternoon!'})
    }
    // EVENING
    else if(new Date().getHours() >= 17 && new Date().getHours() < 5) {
      this.setState({greeting: 'good evening!'})
    }
  }
  componentWillMount() {
    this._changeGreet()
  }
  componentDidMount() {
    this._changeGreet()
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
        <div className="App-content">
          <header>
            <h1>PORTFOLIO</h1>
          </header>
          <section className="Portfolio-projects">
            <article className="col-12-sm">
              <h2>project name</h2>
              <img src="#" alt="project name" />
            </article>
          </section>
        </div>
      )
    }
    else if (this.props.type === 'contact') {
      return (
        <div className="App-content">
          <header>
            <h1>CONTACT</h1>
          </header>
          <section>
            <form>
            </form>
          </section>
        </div>
      )
    }
    else if (this.props.type === 'resume') {
      return (
        <div className="App-content">
          <h1>RESUME</h1>
        </div>
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
