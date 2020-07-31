import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Album';
import Album from './Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Album></Album>
      </div>
    );
  }
}

export default App;
