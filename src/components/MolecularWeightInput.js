import React, { Component } from 'react';
import './styles/MolecularWeightCalculator.css';
import { Input, Popup } from 'semantic-ui-react';

class MolecularWeightInput extends Component {

    render() {
        const { 
            chemicalFormula,
            massError,
            formulaUpdate
        } = this.props;

        return(                
            <Popup 
                content='Please enter a chemical formula (eg. "H2O")'
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