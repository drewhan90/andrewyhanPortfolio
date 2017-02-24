import React, { Component } from 'react';
import myImg from '../images/web_design.jpg';
import projects from '../projects.json';
import '../App.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    this._toggleDesc();
  }
  _imageSlider() { // todo: Project Descript Image slider
    // Plugin? 
  }
  _toggleDesc() {
    // todo: Animated toggle
    const descBox = document.getElementsByClassName('Portfolio-desc')[0];
    if( descBox.style.display === 'none' ) {
      descBox.style.display = 'block';
    }
    else {
      descBox.style.display = 'none';
    }
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
          {/* PORTFOLIO: PROJECT DESCRIPTION */}
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
          {/* PORTFOLIO: PROJECT LIST (todo: fix) */}
          <section className="Portfolio-projects">
            {projects.map((project) =>
              <article className="project-item col-4 col-12-sm">
                  <h2>{project.name}</h2>
                  <img src={require(`../images/${project.images.main}`)} alt={project.name} />
              </article>
            )}
          </section>
        </div>
    );
  }
}

export default Portfolio;