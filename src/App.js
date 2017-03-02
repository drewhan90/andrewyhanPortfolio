import React, { Component } from 'react';

// Components
import Nav from './components/Nav';

class App extends Component {
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
      <div className="App">
          <Nav />

      </div>
    );
  }
}

export default App;
