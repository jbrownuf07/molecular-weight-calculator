import React, { Component } from 'react';
import './App.css';
import MolecularWeightCalculatorForm from './components/MolecularWeightCalculatorForm';

class App extends Component {
  
  render() {
    return (
      <div className="main">
        <h1>Molecular Weight Calculator</h1>
        <MolecularWeightCalculatorForm />
      </div>
    );
  }
}

export default App;
