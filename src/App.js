import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FileLoader from "./fileLoader/FileLoader.js";
import SolutionPresenter from "./solutionPresenter/SolutionPresenter.js";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isClicked: false
        };
    }

    onClick() {
        this.setState({
            isClicked: true
        });
    }

    setFile(_file) {
        this.setState({
            isClicked: false,
            file: _file
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Problem Poligrafa Solver</h2>
                </div>
                <div className="file-loader-container">
                    <FileLoader
                        onClick={ () => this.onClick() }
                        onChange={ () => this.setFile() }
                    />
                </div>
                <div className="solution-container">
                    <SolutionPresenter
                        isVisible={ this.state.isClicked }
                    />
                </div>
            </div>
        );
    }
}

export default App;
