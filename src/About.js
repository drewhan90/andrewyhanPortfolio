import React, { Component } from 'react';
import myImg from './images/web_design.jpg';
import './App.css';

class About extends Component {
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
        <div className="App-content">
            <header className="App-header">
                <h1><span>about</span> andrew han</h1>
            </header>
            <div className="row">
                <div className="col-6 col-12-sm">
                    <img src={myImg} alt="Andrew Han" />
                </div>
                <section className="About-intro col-6 col-12-sm">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sunt esse molestias quae ea quos debitis fugit, qui aliquid laudantium nostrum maxime laborum nihil modi animi rem consectetur similique! Odit.
                    </p>
                </section>
            </div>
            <section className="About-skills">
                <div className="row">
                    <div className="col-6">
                        <header>
                            <h1>web skills</h1>
                        </header>
                        <ul className="skillsList">
                            <li>HTML + CSS</li>
                            <li>JavaScript + jQuery</li>
                            <li>PHP</li>
                            <li>ReactJS</li>
                            <li>AngularJS</li>
                            <li>NodeJS</li>
                            <li>Wordpress</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <header>
                            <h1>design skills</h1>
                        </header>
                        <ul className="skillsList">
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>InDesign</li>
                            <li>After Effect</li>
                            <li>Premiere</li>
                            <li>Sketch (App)</li>
                            <li>AxureRP</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <header>
                            <h1>Marketing skills</h1>
                        </header>
                        <ul className="skillsList">
                            <li>Psychology</li>
                            <li>SEO</li>
                            <li>Project Management</li>
                            <li>Google Analytics</li>
                            <li>Research</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="About-workflow">
                <header>
                    <h1>my workflow</h1>
                </header>
                <div className="container-workflow">
                    <h3>brainstorm + research</h3>
                </div>
                <div className="container-workflow">
                    <h3>mockup + prototype</h3>
                </div>
                <div className="container-workflow">
                    <h3>code</h3>
                </div>
                <div className="container-workflow">
                    <h3>debug + finalize</h3>
                </div>
            </section>
        </div>
    );
  }
}

export default About;