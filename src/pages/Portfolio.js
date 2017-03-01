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
    this._grabProjectData();
    this._toggleModal();
  }
  _imageSlider() { // todo: Project Descript Image slider
    // Plugin? 
  }
  _toggleBtn() {
    // const descBox = document.getElementsByClassName('Portfolio-desc')[0];
    
  }
  _toggleModal() {
    const contain = document.getElementsByClassName('modal-bg')[0];
    const modal = document.getElementsByClassName('Portfolio-modal')[0];
    const items = document.getElementsByClassName('project-item');
    modal.style.display = 'none';
    // Loop through project items
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        modal.style.display = 'block';
      })
    }
    contain.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  _grabProjectData() {
    const items = document.getElementsByClassName('project-item');
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        console.log(items[i].data('value'));
      })
    }
  }
  render() {
    return (
        <div className="App-content slideIn">
          <header>
            <h1>awesome <span className="Portfolio-color">PORTFOLIO</span></h1>
          </header>
          {/* PORTFOLIO: PROJECT DESCRIPTION */}
          <div className="Portfolio-modal">
            <div className="modal-bg"></div>
            <div className="Portfolio-desc">
              <div className="row">
                  <header className="project-intro">
                    <h1 className="noSpacing">{projects[this.state.id].name}</h1>
                    <p  className="noSpacing">{projects[this.state.id].dates.start} - {projects[this.state.id].dates.end}</p>
                  </header>
                  <div className="App-slider col-6">
                      <img src={require(`../images/projects/${projects[0].images.mockups[0]}`)} alt="project name" />
                  </div>
                  <div className="col-6">
                      <div className="project-desc">
                        <p  className="noSpacing">client: {projects[this.state.id].client}</p>
                        <div className="project-technologies">
                          <h3>main technologies</h3>
                          <ul>
                            <li>vanilla JS</li>
                            <li>vanilla JS</li>
                            <li>vanilla JS</li>
                          </ul>
                        </div>
                        <p>{projects[this.state.id].description}</p>
                      </div>
                      <div className="project-links">
                        <a href={projects[this.state.id].link} className="link-site">open project</a>
                        <a href={projects[this.state.id].github} className="link-git"></a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          {/* PORTFOLIO: PROJECT LIST */}
          <section className="Portfolio-projects">
            {projects.map((project) =>
              <article key={project.id} value={project.id} className="project-item col-4 col-12-sm">
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