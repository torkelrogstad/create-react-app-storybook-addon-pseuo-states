import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {SimpleButton} from "./SimpleButton/simple-button";

function App() {
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
          <SimpleButton label={'test'}/>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
