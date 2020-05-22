import React, { Component } from 'react';
import './styles/MolecularWeightCalculator.css';
import { Input, Popup } from 'semantic-ui-react';

class MolecularWeightInput extends Component {

    constructor(props) {
        super(props);
        this.wrapper=React.createRef();
    }

    render() {
        const { 
            chemicalFormula,
            massError,
            formulaUpdate
        } = this.props;

        return(                
            <Popup 
                ref={this.wrapper}
                content='Please enter a chemical formula (eg. "H2O")'
                position="left center"
                trigger={
                    <Input
                        className='formulaInput'
                        icon='flask'
                        iconPosition='left'
                        placeholder='Formula'
                        value={chemicalFormula}
                        name='chemicalFormula'
                        error={massError}
                        onChange={formulaUpdate}
                    />
                }
            />
        );
    }
}

export default MolecularWeightInput;