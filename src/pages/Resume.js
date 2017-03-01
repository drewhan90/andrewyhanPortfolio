import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Resume extends Component {
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
    return (
        <div className="App-content slideIn">
          <header>
            <h1>Professional <span className="Resume-color">RESUME</span></h1>
          </header>
          <section className>
            <a href="" download></a>
          </section>
          <section className="Resume-html">
            <header className="Resume-header">
              <span className="Resume-headerBG"></span>
              <img src={logo} className="App-logo" alt="logo" />
              <h1>andrew han</h1>
              <h3>web developer & interactive desiner</h3>
            </header>
            <div className="Resume-content">
              {/* RESUME: CONTACT */}
              <div className="Resume-contact">
                <ul>
                  <li className="contact-item">
                    <p>(778) 681 - 1317</p>
                  </li>
                  <li className="contact-item"><a href="">
                    <p>drewhan90@gmail.com</p>
                  </a></li>
                  <li className="contact-item"><a href="">
                    <p>www.andrewyhan.com</p>
                  </a></li>
                  <li className="contact-item"><a href="">
                    <p>github.com/drewhan90</p>
                  </a></li>
                  <li className="contact-item"><a href="">
                    <p>www.linkedin.com/in/andrewyhan</p>
                  </a></li>
                </ul>
              </div>
              {/* RESUME: EXPERIENCE */}
              <div className="Resume-experience Resume-container">
                <header>
                  <h2>experience</h2>
                </header>
                <ul>
                  <li className="experience-item">
                    <h3 className="experience-title">Freelance Web Developer</h3>
                    <p className="experience-sub">Andrew Y Han, 2016 - current, Vancouver</p>
                    <ul className="experience-desc">
                      <li><p>Develop websites for independent clients</p></li>
                      <li><p>Manage budget and timelines</p></li>
                    </ul>
                  </li>
                  <li className="experience-item">
                    <h3 className="experience-title">Business English Coach</h3>
                    <p className="experience-sub">HelloCafe, 2015, Seoul, South Korea</p>
                    <ul className="experience-desc">
                      <li><p>Coach English business communication skills to Korean corporate employees</p></li>
                    </ul>
                  </li>
                  <li className="experience-item">
                    <h3 className="experience-title">Event Journalist</h3>
                    <p className="experience-sub">WorknPlay, 2015, Seoul, South Korea</p>
                    <ul className="experience-desc">
                      <li><p>Research and publish articles</p></li>
                      <li><p>Design a user friendly website for WorknPlay</p></li>
                    </ul>
                  </li>
                  <li className="experience-item">
                    <h3 className="experience-title">freelance web developer</h3>
                    <p className="experience-sub">You & Us, 2014 - 2015, Seoul, South Korea</p>
                    <ul className="experience-desc">
                      <li><p>Retail international high-end carpet and fabric brands to the Korean Market</p></li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* RESUME: SKILLS */}
              <div className="Resume-skills Resume-container">
                <div className="row">
                  <div className="skills-web skills-item col-6">
                    <header>
                      <h2>web skills</h2>
                    </header>
                    <ul>
                      <li><p>HTML + CSS</p></li>
                      <li><p>Javascript + Jquery</p></li>
                      <li><p>PHP</p></li>
                      <li><p>ReactJS + Redux</p></li>
                      <li><p>AngularJS</p></li>
                      <li><p>NodeJS</p></li>
                      <li><p>Wordpress</p></li>
                      <li><p>Git</p></li>
                    </ul>
                  </div>
                  <div className="skills-design skills-item col-6">
                    <header>
                      <h2>design skills</h2>
                    </header>
                    <ul>
                      <li><p>Photoshop</p></li>
                      <li><p>Illustator</p></li>
                      <li><p>InDesign</p></li>
                      <li><p>After Effects</p></li>
                      <li><p>Premiere</p></li>
                      <li><p>Sketch (App)</p></li>
                      <li><p>AxureRP</p></li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="skills-marketing skills-item col-6">
                    <header>
                      <h2>marketing skills</h2>
                    </header>
                    <ul>
                      <li><p>Psychology</p></li>
                      <li><p>SEO</p></li>
                      <li><p>Project Management</p></li>
                      <li><p>Google Analytics</p></li>
                      <li><p>Research</p></li>
                    </ul>
                  </div>
                  <div className="skills-language skills-item col-6">
                    <header>
                      <h2>language skills</h2>
                    </header>
                    <ul>
                      <li><p>English</p></li>
                      <li><p>Korean</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default Resume;