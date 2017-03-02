import React, { Component } from 'react';
import projects from '../json/projects.json';
import '../App.css';

class Modal extends Component {
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
        <div className="Portfolio-modal">
            <div className="modal-bg"></div>
            <div className="Portfolio-desc">
              <div className="row">
                  <header className="project-intro">
                    <h1 className="noSpacing">name</h1>
                    <p  className="noSpacing">start - end</p>
                  </header>
                  <div className="App-slider col-6">
                      <img src="" alt="project name" />
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
    );
  }
}

export default Modal;