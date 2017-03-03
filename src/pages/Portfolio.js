import React, { Component } from 'react';

// JSON
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
    this._toggleModal();
  }
  _imageSlider() { // todo: Project Descript Image slider
    // Plugin? 
  }
  _toggleBtn() {
    // const descBox = document.getElementsByClassName('Portfolio-desc')[0];
    
  }
  _toggleModal() {
    const modal = document.querySelector('.Portfolio-modal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.btn-close');
    const thumbnails = document.getElementsByClassName('thumbnail-item');

    // Loop through project items
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', () => {
        modal.classList.toggle('hidden');
        modalOverlay.classList.toggle('hidden');
      })
    }
    modalOverlay.addEventListener('click', () => {
        modal.classList.toggle('hidden');
        modalOverlay.classList.toggle('hidden');
    });
    closeBtn.addEventListener('click', () => {
        modal.classList.toggle('hidden');
        modalOverlay.classList.toggle('hidden');
    });
  }
  _grabProjectData() {
    const items = document.getElementsByClassName('thumbnail-item');
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('click', () => {
        this.setState({id: items[i].dataset.key});
      })
    }
  }
  _changeProjectData(key) {
    this.setState({id: key})
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
                <article className="thumbnail-item col-4 col-12-sm" key={project.id} data-key={project.id - 1} onClick={(e) => this._grabProjectData(project.id - 1 ,e)}>
                    <img src={require(`../images/projects/${project.images.thumbnail}`)} alt={project.name} />
                    <div className="thumbnail-title hidden-sm">
                      <h3 className="noMarginPadding">{project.name}</h3>
                      <p className="noMarginPadding">{project.category}</p>
                    </div>
                </article>
              )}
            </section>
          </div>
          {/* PORTFOLIO: PROJECT DESCRIPTION */}
            <section className="Portfolio-modal hidden">
              <div className="modal-content">
                  <header className="modal-header">
                    <span className="btn-close"></span>
                    <h1 className="noMarginPadding">{projects[this.state.id].name}</h1>
                    <p className="noMarginPadding">{projects[this.state.id].dates.start} - {projects[this.state.id].dates.end}</p>
                    <p  className="noMarginPadding">client: {projects[this.state.id].client}</p>
                  </header>
                  <div className="modal-slider col-12">
                      <img src={require(`../images/projects/${projects[this.state.id].images.mockups[0]}`)} alt="project name" />
                  </div>

                  <div className="project-info row">
                    <div className="project-technologies col-5">
                      <h2>main technologies</h2>
                      <ul className="technologies-list">
                        <li>{projects[this.state.id].technologys[0]}</li>
                        <li>{projects[this.state.id].technologys[1]}</li>
                        <li>{projects[this.state.id].technologys[2]}</li>
                      </ul>
                    </div> {/* End of Project Tech */}
                    <div className="project-desc col-7">
                      <h2>project description</h2>
                      <p>{projects[this.state.id].description}</p>
                    </div>
                  </div>

                  <div className="project-links">
                    <a href={projects[this.state.id].link} className="link-web">go to website</a>
                    <a href={projects[this.state.id].github} className="link-git">github</a>
                  </div>
              </div> 
            </section>
          <div className="modal-overlay hidden"></div>
        </div>
    );
  }
}

export default Portfolio;