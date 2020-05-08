import React from 'react';
import Button from '../../UI/Button'

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
                                    .map(igKey => {
                                        return (
                                            <li key={igKey}>
                                                <span style={{textTransform: 'capitalize'}}>{igKey}</span> {props.ingredients[igKey]}
                                            </li> );
                                    });
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p><strong>Total Cost: { props.totalPrice }</strong></p>
            <p>A delicius burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.hideOrderSummary}>Cancel</Button>
            <Button btnType='Success' clicked={() => alert('Confirm clicked')}>Confirm</Button>
        </React.Fragment>
    );
}

export default OrderSummary;