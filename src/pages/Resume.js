import React, { Component } from 'react';
import logo from '../logo.svg';
import resumePNG from '../images/andrewHan_Resume_final.pdf';
import '../styles/Resume.css';


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
      <div className="App-container">
        <div className="App-content">
          <header className="Content-header">
            <h1>Professional <span className="Resume-color">RESUME</span></h1>
          </header>
          <section className="Resume-download">
            <a href={resumePNG} download></a>
          </section>
          {/* HTML RESUME STARTS HERE */}
          <section className="Resume-htmlResume">
            <header className="htmlResume-header">
              <div className="htmlResume-brand">
                <img className="htmlResume-logo App-logo" src={logo} alt="logo" />
                <h1 className="noMarginPadding">andrew han</h1>
                <h3 className="noMarginPadding">web developer & interactive desiner</h3>
              </div>
              <span className="htmlResume-headerBG"></span>
            </header>
            <div className="htmlResume-content">
              {/* RESUME: CONTACT */}
              <div className="htmlResume-contact">
                <ul className="contactResume-list Resume-list">
                  <li>
                    <p>(778) 681 - 1317</p>
                    <span className="icon-Phone"></span>
                  </li>
                  <li><a href="mailto:drewhan90@gmail.com">
                    <p>drewhan90@gmail.com</p>
                    <span className="icon-Mail"></span>
                  </a></li>
                  <li><a href="www.andrewyhan.com">
                    <p>www.andrewyhan.com</p>
                    <span className="icon-www"></span>
                  </a></li>
                  <li><a href="github.com/drewhan90">
                    <p>github.com/drewhan90</p>
                    <span className="icon-GitHub"></span>
                  </a></li>
                  <li><a href="www.linkedin.com/in/andrewyhan">
                    <p>www.linkedin.com/in/andrewyhan</p>
                    <span className="icon-LinkedIn"></span>
                  </a></li>
                </ul>
              </div>
              {/* RESUME: EXPERIENCE */}
              <div className="htmlResume-exp htmlResume-box">
                <header>
                  <h2>experience</h2>
                </header>
                <ul className="Resume-list">
                  <li className="exp-item">
                    <h3 className="noMarginPadding">Freelance Web Developer</h3>
                    <p className="exp-location noMarginPadding">Andrew Y Han, 2016 - current, Vancouver</p>
                    <ul className="exp-desc">
                      <li>Develop websites for independent clients.</li>
                      <li>Manage budget and timelines.</li>
                    </ul>
                  </li>
                  <li className="exp-item">
                    <h3 className="noMarginPadding">Business English Coach</h3>
                    <p className="exp-location noMarginPadding">HelloCafe, 2015, Seoul, South Korea</p>
                    <ul className="exp-desc">
                      <li>Coach English business communication skills to Korean corporate employees</li>
                    </ul>
                  </li>
                  <li className="exp-item">
                    <h3 className="noMarginPadding">Event Journalist</h3>
                    <p className="exp-location noMarginPadding">WorknPlay, 2015, Seoul, South Korea</p>
                    <ul className="exp-desc">
                      <li>Research and publish articles.</li>
                      <li>Design a user friendly website for WorknPlay.</li>
                    </ul>
                  </li>
                  <li className="exp-item">
                    <h3 className="noMarginPadding">freelance web developer</h3>
                    <p className="exp-location noMarginPadding">You & Us, 2014 - 2015, Seoul, South Korea</p>
                    <ul className="exp-desc">
                      <li>Retail international high-end carpet and fabric brands to the Korean Market</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* RESUME: SKILLS */}
              <div className="htmlResume-skills htmlResume-box">
                <div className="row">
                  <div className="skills-web skills-item col-6">
                    <header>
                      <h2>web skills</h2>
                    </header>
                    <ul className="Resume-list">
                      <li>HTML + CSS</li>
                      <li>Javascript + Jquery</li>
                      <li>PHP</li>
                      <li>ReactJS + Redux</li>
                      <li>AngularJS</li>
                      <li>NodeJS</li>
                      <li>Wordpress</li>
                      <li>Git</li>
                    </ul>
                  </div>
                  <div className="skills-design skills-item col-6">
                    <header>
                      <h2>design skills</h2>
                    </header>
                    <ul className="Resume-list">
                      <li>Photoshop</li>
                      <li>Illustator</li>
                      <li>InDesign</li>
                      <li>After Effects</li>
                      <li>Premiere</li>
                      <li>Sketch (App)</li>
                      <li>AxureRP</li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="skills-marketing skills-item col-6">
                    <header>
                      <h2>marketing skills</h2>
                    </header>
                    <ul className="Resume-list">
                      <li>Psychology</li>
                      <li>SEO></li>
                      <li>Project Management</li>
                      <li>Google Analytics</li>
                      <li>Research</li>
                    </ul>
                  </div>
                  <div className="skills-language skills-item col-6">
                    <header>
                      <h2>language skills</h2>
                    </header>
                    <ul className="Resume-list">
                      <li>English</li>
                      <li>Korean</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* RESUME: EDUCATION */}
            <div className="htmlResume-edu htmlResume-box">
              <header>
                <h2>education</h2>
              </header>
              <ul className="Resume-list">
                <li className="edu-item">
                  <h3 className="noMarginPadding">Diploma, Web Development & Interactive Design</h3>
                  <p className="edu-location noMarginPadding">Vancouver Institue of Media Arts, 2017</p>
                </li>
                <li className="edu-item">
                  <h3 className="noMarginPadding">Bachelor of Arts, Psychology</h3>
                  <p className="edu-location noMarginPadding">University of British Columbia, 2015</p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Resume;