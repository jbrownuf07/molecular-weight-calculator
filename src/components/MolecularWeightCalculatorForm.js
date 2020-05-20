import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
const molFormula = require('molecular-formula');

class MolecularWeightCalculatorForm extends Component {

    state = { 
        chemicalFormula: '', 
        submittedName: '', 
        formula: '', 
        mass: 0, 
        massError: false 
    }

    handleChange = (e, { name, value }) => {
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

    handleSubmit = () => {
    const { name } = this.state

    this.setState({ submittedName: name })
    }

    render() {
    const { chemicalFormula, formula, mass, massError, submittedName } = this.state

    return (
        <div>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group>
                <Form.Input
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
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ 
            chemicalFormula,
            formula,
            mass: parseFloat(parseFloat(mass).toFixed(4))
            }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName }, null, 2)}</pre>
        </div>
    )
    }
}

export default MolecularWeightCalculatorForm