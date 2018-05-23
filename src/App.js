import React, { Component } from 'react';
import {
  Link,
  Switch,
  Route
} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">reddit</h1>
          <h2 className="App-blurb">The front page of the web</h2>
        </header>
      </div>
    );
  }
}

export default App;
