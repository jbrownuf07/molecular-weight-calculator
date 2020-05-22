import React from 'react';
import { Button } from 'semantic-ui-react';

function IncrementDecrementResetButtons(props) {
    return (
        <div>
            <Button compact circular icon='plus' color='green' onClick={props.incrementFormulas} disabled={props.disableIncrement} />
            <Button compact circular icon='minus' color='red' onClick={props.decrementFormulas} disabled={props.disableDecrement} />
            <Button compact secondary circular icon='redo' onClick={props.reset} disabled={props.disableReset} />
        </div>
    )
}

export default IncrementDecrementResetButtons;