import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../Burger'
import Button from '../UI/Button'

const CheckoutSummary = (props) => {
    return (
        <Auxiliary>
            <Burger ingredients={ props.ingredients } />
            <Button btnType='Danger' clicked={props.cancelCheckout}>Cancel</Button>
            <Button btnType='Success' clicked={props.confirmCheckout}>Confirm</Button>
        </Auxiliary>
    );
}

export default CheckoutSummary;