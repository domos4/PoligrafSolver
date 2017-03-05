import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FileLoader from './fileLoader/FileLoader.js';
import SolutionPresenter from './solutionPresenter/SolutionPresenter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Problem Poligrafa Solver</h2>
        </div>
        <p className="file-loader-container">
            <FileLoader/>
        </p>
          <p className="solution-container">
              <SolutionPresenter/>
          </p>
      </div>
    );
  }
}

export default App;
