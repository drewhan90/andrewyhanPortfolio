import React, { Component } from 'react';
import myInfo from '../json/about.json';
import myImg from '../images/web_design.jpg';
import '../App.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        day: ''
    }
  }
  componentWillMount() {

  }
  componentDidMount() {
    this._calculateDaysSince(myInfo.birthday);
  }
  _calculateDaysSince(date) {
    const minutes = 1000 * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    const years = days * 365;
    const d = new Date();
    const t = d.getTime();
    const curYear = 1970 + Math.round(t/ years);

    console.log(curYear);
  }
  render() { // todo: link to resume content
    return (
        <div className="App-content">
            <header className="App-header">
                <h1><span className="About-color">about</span> andrew han</h1>
            </header>
            <div className="About-myImg">
                <img src={myImg} alt="Andrew Han" />
            </div>
            <section className="About-info">
                <div className="info-group col-4">
                    <h2>history</h2>
                    <ul className="info-list">
                        <li>lived 20000 days</li>
                        <li>born in Seoul, Korea</li>
                        <li>living in Vancouver, Canada</li>
                        <li>developed for 150 days</li>
                        <li>developed for 150 days</li>
                    </ul>
                </div>
                <div className="info-group col-4">
                    <h2>favorite Tech</h2>
                    <ul className="info-list">
                        <li>language: <span className="dynamic-text">{myInfo["favored tech"].code}</span></li>
                        <li>mockup: <span className="dynamic-text">{myInfo["favored tech"].mockup}</span></li>
                        <li>prototype: <span className="dynamic-text">{myInfo["favored tech"].prototype}</span></li>
                        <li>frameworks: <span className="dynamic-text">{myInfo["favored tech"].frameoworks}</span></li>
                        <li>adobe: <span className="dynamic-text">{myInfo["favored tech"].adobe}</span></li>
                    </ul>
                </div>
                <div className="info-group col-4">
                    <h2>current hobbies</h2>
                    <ul className="info-list">
                        <li>learning <span className="dynamic-text">{myInfo.hobbies.learning}</span></li>
                        <li>reading <span className="dynamic-text">{myInfo.hobbies.book.title}</span></li>
                        <li>drinking <span className="dynamic-text">{myInfo.hobbies.beer}</span></li>
                        <li>watching <span className="dynamic-text">{myInfo.hobbies["tv show"]}</span></li>
                        <li>playing <span className="dynamic-text">{myInfo.hobbies["video game"]}</span></li>
                    </ul>
                </div>
            </section>
            <section className="About-workflow">
                <header>
                    <h2>my workflow</h2>
                </header>
                <div className="workflow-phase1 container-workflow">
                    <h3>brainstorm + research</h3>
                    <div className="popup-phase1 container-popup">
                        <h3>phase 1 [20%]</h3>
                        <p>Create assets with adobe</p>
                    </div>
                </div>
                <div className="workflow-phase2 container-workflow">
                    <h3>mockup + prototype</h3>
                    <div className="popup-phase2 container-popup">
                        <h3>phase 2 [30%]</h3>
                        <p>Use Sketch and create content</p>
                    </div>
                </div>
                <div className="workflow-phase3 container-workflow">
                    <h3>code</h3>
                    <div className="popup-phase3 container-popup">
                        <h3>phase 3 [40%]</h3>
                        <p>Favor VSC IDE and ReactJS</p>
                    </div>
                </div>
                <div className="workflow-phase4 container-workflow">
                    <h3>debug + finalize</h3>
                    <div className="popup-phase4 container-popup">
                        <h3>phase 4 [10%]</h3>
                        <p>Lint tools and unit tests</p>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}

export default About;