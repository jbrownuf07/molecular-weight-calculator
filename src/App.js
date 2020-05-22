import React, { Component } from 'react';
import './App.css';
import MolecularWeightFormulas from './components/MolecularWeightFormulas';

class App extends Component {
  
  render() {
    return (
      <div className="main">
        <MolecularWeightFormulas />
      </div>
    );
  }
}

export default App;
