import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl';

const controls = [
    {label: 'salad', type: 'salad'},
    {label: 'bacon', type: 'bacon'},
    {label: 'cheese', type: 'cheese'},
    {label: 'tikki', type: 'tikki'},
];

const BuildCOntrols = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{ props.totalPrice }</strong></p>
        { controls.map(ctrl =>
            <BuildControl key={ctrl.label}
                label={ctrl.label}
                disabled={props.btnDisables[ctrl.type]}
                added={() => props.addIngredients(ctrl.type)}
                removed={() => props.removeIngredients(ctrl.type)} />)
        }
        <button
            className={classes.OrderNowBtn}
            disabled={!props.isPurchasable}
            onClick={props.showOrderSummary} >
                ORDER NOW
        </button>
    </div>
)

export default BuildCOntrols;