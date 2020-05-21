import React, { Component } from 'react';
import './styles/MolecularWeightCalculator.css';

class MolecularWeightOutput extends Component {

    render() {
        return (
            <div className="formulaOutputArea">
                <h3 className="formulaTag">Formula</h3>
                <p className="formulaOutput">{this.props.formula}</p>
                <h3 className="avgMassTag">Average molecular mass</h3>
                <p className="massOutput">{this.props.mass}</p>
            </div>
        );
    }
}

export default MolecularWeightOutput;