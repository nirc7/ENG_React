import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  btnClicked = () => {
    console.log('clicked!');
    let num = 7;
    if (num == 8) {
      num++;
    }
    else {
      num -= 2;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.btnClicked}>click</button>
        </header>
      </div>
    );
  }
}

export default App;
