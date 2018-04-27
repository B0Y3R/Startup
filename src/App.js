import React, { Component } from 'react';
import Features from './Components/Features';
import Landing from './Components/Landing';
import IconFacts from './Components/IconFacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing /> 
        <Features />
        <IconFacts />
      </div>
    );
  }
}

export default App;


