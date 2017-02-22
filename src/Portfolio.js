import React, { Component } from 'react';
import myImg from './images/web_design.jpg';
import './App.css';

class Portfolio extends Component {
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
          <header>
            <h1>PORTFOLIO</h1>
          </header>
          <nav className="Portfolio-nav">
            <ul>
              <li><h3>web</h3></li>
              <li><h3>mobile</h3></li>
              <li><h3>design</h3></li>
            </ul>
          </nav>
          <section className="Portfolio-projects">
            <article className="project-item col-4 col-12-sm">
              <h2>project name</h2>
              <img src={myImg} alt="project name" />
            </article>
            <article className="project-item col-4 col-12-sm">
              <h2>project name</h2>
              <img src={myImg} alt="project name" />
            </article>
            <article className="project-item col-4 col-12-sm">
              <h2>project name</h2>
              <img src={myImg} alt="project name" />
            </article>
            <article className="project-item col-4 col-12-sm">
              <h2>project name</h2>
              <img src={myImg} alt="project name" />
            </article>
            <article className="project-item col-4 col-12-sm">
              <h2>project name</h2>
              <img src={myImg} alt="project name" />
            </article>
            <article className="project-item col-4 col-12-sm">
              <h2>project name</h2>
              <img src={myImg} alt="project name" />
            </article>
          </section>

          <div className="Portfolio-desc">
            <article>
                <div className="row">
                    <div className="App-slider col-6">
                        <img src={myImg} alt="project name" />
                    </div>
                    <div className="col-6">
                        <header>
                            <h1>project name</h1>
                        </header>
                        <p>project description</p>
                    </div>
                </div>
            </article>
          </div>
        </div>
    );
  }
}

export default Portfolio;