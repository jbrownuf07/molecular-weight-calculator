import React, { Component } from 'react';
import './styles/MolecularWeightStyles.css'
import { Input, Popup } from 'semantic-ui-react';

class MolecularWeightInput extends Component {

    constructor(props) {
        super(props);
        this.wrapper=React.createRef();
    }

    render() {
        const { 
            id,
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
                        className='formulaInput mwWidth'
                        icon='flask'
                        iconPosition='left'
                        placeholder={`Formula ${id}`}
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