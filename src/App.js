import React, { Component } from 'react';
import logo from './logo.svg';
import './App.styl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img className="App-logo" src={logo} width={190} height={190}/>

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
