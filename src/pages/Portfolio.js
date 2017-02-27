import React, { Component } from 'react';
import myImg from '../images/web_design.jpg';
import projects from '../json/projects.json';
import '../App.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    this._toggleBtn();
  }
  _imageSlider() { // todo: Project Descript Image slider
    // Plugin? 
  }
  _toggleDesc(id) {
    // todo: Animated toggle
    const descBox = document.getElementsByClassName('Portfolio-desc')[0];
    descBox.style.display = 'block';
    this.setState({id: id - 1})
  }
  _toggleBtn() {
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
              <li><h3>all</h3></li>
              <li><h3>web</h3></li>
              <li><h3>mobile</h3></li>
              <li><h3>design</h3></li>
            </ul>
          </nav>
          {/* PORTFOLIO: PROJECT DESCRIPTION */}
          <div className="Portfolio-desc">
            <article>
              <div className="btn-toggleClose" onClick={(e) => this._toggleBtn(e)}>
                <i className="fa fa-window-minimize" aria-hidden="true"></i>
              </div>
              <div className="row">
                  <div className="App-slider col-6">
                      <img src={myImg} alt="project name" />
                  </div>
                  <div className="col-6">
                      <header>
                          <h2>{projects[this.state.id].name}</h2>
                      </header>
                      <h3>started {projects[this.state.id].dates.start} ended {projects[this.state.id].dates.end}</h3>
                      <h3>client {projects[this.state.id].client}</h3>
                      <div className="project-technologies">
                        <h3>main technologies</h3>
                        <ul>
                          <li>vanilla JS</li>
                          <li>vanilla JS</li>
                          <li>vanilla JS</li>
                        </ul>
                      </div>
                  </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>{projects[this.state.id].description}</p>
                        <a href={projects[this.state.id].link} className="project-link">open project</a>
                    </div>
                </div>
            </article>
          </div>
          {/* PORTFOLIO: PROJECT LIST (todo: fix) */}
          <section className="Portfolio-projects">
            {projects.map((project) =>
              <article key={project.id} value={project.id} className="project-item col-4 col-12-sm" onClick={(e) => this._toggleDesc(project.id, e)}>
                  <div className="project-category">
                    <h3>{project.category}</h3>
                  </div>
                  <img src={require(`../images/${project.images.main}`)} alt={project.name} />
                  <div className="project-name">
                    <h2>{project.name}</h2>
                  </div>
              </article>
            )}
          </section>
        </div>
    );
  }
}

export default Portfolio;