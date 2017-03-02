import React, { Component } from 'react';
import projects from '../json/projects.json';

import '../styles/Portfolio.css';

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
    const items = document.getElementsByClassName('thumbnail-item');
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
    const items = document.getElementsByClassName('thumbnail-item');
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        console.log(items[i].data('value'));
      })
    }
  }
  render() {
    return (
        <div className="App-container">
          <div className="App-content">
            <header className="Content-header">
              <h1>awesome <span className="Portfolio-color">PORTFOLIO</span></h1>
            </header>
            
            {/* PORTFOLIO: PROJECT LIST */}
            <section className="Portfolio-thumbnails">
              {projects.map((project) =>
                <article className="thumbnail-item col-4 col-12-sm" key={project.id} value={project.id} >
                    <img src={require(`../images/projects/${project.images.thumbnail}`)} alt={project.name} />
                    <div className="thumbnail-title hidden-sm">
                      <h3 className="noMarginPadding">{project.name}</h3>
                      <p className="noMarginPadding">{project.category}</p>
                    </div>
                </article>
              )}
            </section>

            {/* PORTFOLIO: PROJECT DESCRIPTION */}
            <div className="Portfolio-modal">
              <div className="modal-bg"></div>
              <div className="Portfolio-desc">
                <div className="row">
                    <header className="project-intro">
                      <h1 className="noMarginPadding">{projects[this.state.id].name}</h1>
                      <p  className="noMarginPadding">{projects[this.state.id].dates.start} - {projects[this.state.id].dates.end}</p>
                    </header>
                    <div className="App-slider col-6">
                        <img src={require(`../images/projects/${projects[0].images.mockups[0]}`)} alt="project name" />
                    </div>
                    <div className="col-6">
                        <div className="project-desc">
                          <p  className="noMarginPadding">client: {projects[this.state.id].client}</p>
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
          </div>
        </div>
    );
  }
}

export default Portfolio;