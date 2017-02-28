import React, { Component } from 'react';
import myInfo from '../json/about.json';
// import myImg from '../images/web_design.jpg';
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
        <div className="App-content slideIn">
            <header className="App-header">
                <h1><span className="About-color">about</span> andrew han</h1>
            </header>
            {/*<div className="About-myImg">
                <img src={myImg} alt="Andrew Han" />
            </div>*/}
            <section className="About-info col-5">
                <div className="info-group">
                    <h2>andrew is ...</h2>
                    <ul className="info-list">
                        <li>a developer since for 150 days</li>
                        <li>20000 days old</li>
                        <li>from <span className="dynamic-text">{`${myInfo.location.origin.country}, ${myInfo.location.origin.city}`}</span></li>
                        <li>living in <span className="dynamic-text">{`${myInfo.location.current.country}, ${myInfo.location.current.city}`}</span></li>
                    </ul>
                </div>
                <div className="info-group">
                    <h2>andrew's favorite ...</h2>
                    <ul className="info-list">
                        <li>coding language is <span className="dynamic-text">{myInfo["favored tech"].code}</span></li>
                        <li>program for mockups is <span className="dynamic-text">{myInfo["favored tech"].mockup}</span></li>
                        <li>program for prototyping is <span className="dynamic-text">{myInfo["favored tech"].prototype}</span></li>
                        <li>frameworks JS is <span className="dynamic-text">{myInfo["favored tech"].frameworks}</span></li>
                        <li>adobe software is <span className="dynamic-text">{myInfo["favored tech"].adobe}</span></li>
                    </ul>
                </div>
                <div className="info-group">
                    <h2>andrew is currently ...</h2>
                    <ul className="info-list">
                        <li>learning <span className="dynamic-text">{myInfo.hobbies.learning}</span></li>
                        <li>reading <span className="dynamic-text">{myInfo.hobbies.book.title}</span></li>
                        <li>drinking <span className="dynamic-text">{myInfo.hobbies.beer}</span></li>
                        <li>watching <span className="dynamic-text">{myInfo.hobbies["tv show"]}</span></li>
                        <li>playing <span className="dynamic-text">{myInfo.hobbies["video game"]}</span></li>
                    </ul>
                </div>
            </section>

            <section className="About-workflow col-7">
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