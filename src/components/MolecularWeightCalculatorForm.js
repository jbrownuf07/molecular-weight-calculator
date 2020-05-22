import React, { Component } from 'react';
import './styles/MolecularWeightStyles.css'

import MolecularWeightInput from './MolecularWeightInput';
import MolecularWeightOutput from './MolecularWeightOutput';
// import { Form } from 'semantic-ui-react';
const molFormula = require('molecular-formula');



class MolecularWeightCalculatorForm extends Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    significantDigits = () => 6;
    
    state = { 
        id: 1,
        chemicalFormula: '', 
        formula: '', 
        mass: 0, 
        massError: false 
    }

    handleChange = (e, { name, value }) => {
        try {
            const chemical = new molFormula(value)
            if (!isNaN(chemical.getMass()))
            {
                this.setState({ 
                    [name]: value,
                    formula: chemical.getSimplifiedFormula(),
                    mass: chemical.getMass(),
                    massError: false
                });
            }
            else 
            {
                this.setState({
                    [name]: value,
                    formula: 'Not acceptable chemical formula',
                    mass: 0,
                    massError: true
                });
            }
        }
        catch (err) {
            this.setState({
                [name]: value,
                formula: 'Not acceptable chemical formula',
                mass: 0,
                massError: true
            })
        }
    }

    render() {
        const { 
            chemicalFormula, 
            formula, 
            mass, 
            massError
        } = this.state

        return (
            <div ref={this.wrapper}>
                <MolecularWeightInput 
                    id={this.props.id}
                    chemicalFormula={chemicalFormula} 
                    massError={massError}
                    formulaUpdate={this.handleChange}
                    />
                
                <MolecularWeightOutput
                    formula={formula}
                    mass={parseFloat(parseFloat(mass).toFixed(this.significantDigits()))}
                    />
                {/* <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            className='formulaInput'
                            icon='flask'
                            iconPosition='left'
                            placeholder='Formula'
                            name='chemicalFormula'
                            value={chemicalFormula}
                            error={massError}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                </Form>
                <strong>Chemical information:</strong>
                <pre>{JSON.stringify({ 
                    chemicalFormula,
                    formula,
                    mass: parseFloat(parseFloat(mass).toFixed(this.significantDigits())),
                    averageMass
                    }, null, 2)}</pre> */}
            </div>
        )
    }
}

export default MolecularWeightCalculatorForm