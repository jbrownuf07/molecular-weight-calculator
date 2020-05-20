import React, { Component } from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import MolecularWeightCalculatorForm from './components/MolecularWeightCalculatorForm';

// import FormExampleCaptureValues from './components/FormExampleCaptureValues';

class App extends Component {
  
  render() {
    return (
      <Container>
        <h1>Molecular Weight Calculator</h1>
        <MolecularWeightCalculatorForm />
      </Container>
    );
  }
}

export default App;
