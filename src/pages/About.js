import React, { Component } from 'react';
const moment = require('moment');
import Chart from 'chart.js';
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
    this._createChart();
  }
  _createChart() {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Cooking", "Drinking", "Coding", "Designing", "Gaming", "Reading", "Watching"],
            datasets: [{
                label: '# of hours/week spent',
                data: [4, 4, 16, 6, 8, 5, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
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
            <div className="row">
                <section className="About-info col-5">
                    <div className="info-group">
                        <h2>andrew is ...</h2>
                        <ul className="info-list">
                            <li>a developer since <span className="dynamic-text">{moment(myInfo["code date"], "YYYYMMDD").fromNow()}</span></li>
                            <li>winning in life for <span className="dynamic-text">{moment(myInfo.birthday, "YYYYMMDD").fromNow(true)}</span></li>
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
                    <canvas id="myChart" width="400" height="400"></canvas>
                </section>
            </div>
        </div>
    );
  }
}

export default About;