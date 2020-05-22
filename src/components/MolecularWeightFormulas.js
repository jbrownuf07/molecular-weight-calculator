import React, { Component } from 'react';
import './styles/MolecularWeightStyles.css';
import IncrementDecrementResetButtons from './IncrementDecrementResetButtons';
import MolecularWeightCalculatorForm from './MolecularWeightCalculatorForm';

class MolecularWeightFormulas extends Component {

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    startingNumberOfFormulas = () => 3;
    maxFormulas = () => 10;

    state = {
        numberOfFormulas: this.startingNumberOfFormulas(),
        disableIncrement: false,
        disableDecrement: false,
        disableReset: true
    }

    incrementFormulas = () => {
        const numOfFormulas = this.state.numberOfFormulas + 1;
        const disableIncrement = numOfFormulas < this.maxFormulas() ? false : true;
        const disableDecrement = numOfFormulas > 1 ? false : true;
        const disableReset = numOfFormulas === this.startingNumberOfFormulas() ? true : false;
        this.setState({
            numberOfFormulas: numOfFormulas,
            disableIncrement,
            disableDecrement,
            disableReset
        });
    }

    decrementFormulas = () => {
        const numOfFormulas = this.state.numberOfFormulas - 1;
        const disableIncrement = numOfFormulas < this.maxFormulas() ? false : true;
        const disableDecrement = numOfFormulas > 1 ? false : true;
        const disableReset = numOfFormulas === this.startingNumberOfFormulas() ? true : false;
        this.setState({
            numberOfFormulas: numOfFormulas,
            disableIncrement,
            disableDecrement,
            disableReset
        });
    }

    reset = () => {
        this.setState({
            numberOfFormulas: this.startingNumberOfFormulas(),
            disableIncrement: false,
            disableDecrement: false,
            disableReset: true
        });
    }

    render() {
        return(
            <div ref={this.wrapper}>
                <h1>Molecular Weight Calculator</h1>
                <IncrementDecrementResetButtons
                    incrementFormulas={this.incrementFormulas}
                    decrementFormulas={this.decrementFormulas}
                    disableIncrement={this.state.disableIncrement}
                    disableDecrement={this.state.disableDecrement}
                    reset={this.reset}
                    disableReset={this.state.disableReset} />

                <ul className="formulaList">
                    {Array.from(Array(this.state.numberOfFormulas), (e, i) => {
                        return(<li key={i}><MolecularWeightCalculatorForm id={i+1} /></li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default MolecularWeightFormulas;