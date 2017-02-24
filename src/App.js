import React, { Component } from 'react';
import Label from './Label.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Nutrition</h2>
        </div>
        <h1 className="App-intro">
          An experiment to build the nutritional facts label in react components.
        </h1>

        <div className="App-content">
          <Label />
        </div>
      </div>
    );
  }
}

export default App;
