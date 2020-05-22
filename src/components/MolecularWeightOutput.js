import React, { Component } from 'react';
import './styles/MolecularWeightStyles.css'

class MolecularWeightOutput extends Component {

    constructor(props) {
        super(props);
        this.wrapper=React.createRef();
    }

    render() {
        return (
            <div
                ref = {this.wrapper} 
                className="formulaOutputArea mwWidth">
                <h3 className="avgMassTag mwWidth">MW: 
                    <span className="massOutput mwWidth">{this.props.mass} g/mol</span>
                </h3>
                
                
            </div>
        );
    }
}

export default MolecularWeightOutput;