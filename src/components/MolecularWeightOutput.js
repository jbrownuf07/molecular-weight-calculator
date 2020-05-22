import React, { Component } from 'react';
import './styles/MolecularWeightCalculator.css';

class MolecularWeightOutput extends Component {

    constructor(props) {
        super(props);
        this.wrapper=React.createRef();
    }

    render() {
        return (
            <div
                ref = {this.wrapper} 
                className="formulaOutputArea">
                <h3 className="avgMassTag">MW: 
                    <span className="massOutput">{this.props.mass} g/mol</span>
                </h3>
                
                
            </div>
        );
    }
}

export default MolecularWeightOutput;