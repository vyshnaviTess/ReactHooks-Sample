import React, { Component } from 'react';
import { render } from 'react-dom';
import './styles.css';

// If you classes in React, this code should look familiar:

// Components
import Greeting from './Greetings';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrapper">
        <Greeting />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
