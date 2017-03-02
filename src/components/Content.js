import React, { Component } from 'react';
// Styles 
import '../styles/Content.css';
// Page Contents
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
  }
  componentDidMount() {
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
        <Home ref="home" />
      )
    }
  }
}

export default Content;