import React, { Component } from 'react';
import './MolecularWeightCalculator.css';
import { Form } from 'semantic-ui-react';
const molFormula = require('molecular-formula');

class MolecularWeightCalculatorForm extends Component {

    significantDigits = () => 6;
    
    state = { 
        chemicalFormula: '', 
        formula: '', 
        mass: 0, 
        averageMass: 0,
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
            massError,
            averageMass
        } = this.state

        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
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
                        {/* <Form.Button content='Submit' /> */}
                    </Form.Group>
                </Form>
                <strong>Chemical information:</strong>
                <pre>{JSON.stringify({ 
                    chemicalFormula,
                    formula,
                    mass: parseFloat(parseFloat(mass).toFixed(this.significantDigits())),
                    averageMass
                    }, null, 2)}</pre>
            </div>
        )
    }
}

export default MolecularWeightCalculatorForm