import React, { Component } from 'react';
import projects from '../json/projects.json';
import '../App.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
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
    console.log(this.state.id);
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
        <div className="App-content slideIn">
          <header>
            <h1>awesome <span className="Portfolio-color">PORTFOLIO</span></h1>
          </header>
          {/* PORTFOLIO: PROJECT DESCRIPTION */}
          <div className="Portfolio-desc">
            <article>
              <div className="btn-toggleClose" onClick={(e) => this._toggleBtn(e)}>
                <i className="fa fa-window-minimize" aria-hidden="true"></i>
              </div>
              <div className="row">
                  <div className="App-slider col-6">
                      <img src={require(`../images/projects/${projects[0].images.mockups[0]}`)} alt="project name" />
                  </div>
                  <div className="col-6">
                      <header>
                          <h2 className="noSpacing">{projects[this.state.id].name}</h2>
                      </header>
                      <div className="desc-main">
                        <p  className="noSpacing">started {projects[this.state.id].dates.start} ended {projects[this.state.id].dates.end}</p>
                        <p  className="noSpacing">client {projects[this.state.id].client}</p>
                        <div className="project-technologies">
                          <h3>main technologies</h3>
                          <ul>
                            <li>vanilla JS</li>
                            <li>vanilla JS</li>
                            <li>vanilla JS</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                        <p>{projects[this.state.id].description}</p>
                        <a href={projects[this.state.id].link} className="project-link">open project</a>
                    </div>
                  </div>
                </div>
            </article>
          </div>
          {/* PORTFOLIO: PROJECT LIST */}
          <section className="Portfolio-projects">
            {projects.map((project) =>
              <article key={project.id} value={project.id} className="project-item col-4 col-12-sm" onClick={(e) => this._toggleDesc(project.id, e)}>
                  <img src={require(`../images/projects/${project.images.thumbnail}`)} alt={project.name} />
                  <div className="project-title">
                    <h3 className="noSpacing">{project.name}</h3>
                    <p className="noSpacing">{project.category}</p>
                  </div>
              </article>
            )}
          </section>
        </div>
    );
  }
}

export default Portfolio;