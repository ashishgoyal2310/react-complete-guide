import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

import { instanceOrder as axiosOrder } from '../axiosInstance'
import Auxiliary from '../../hoc/Auxiliary'
import CheckoutSummary from '../../components/Burger/CheckOutSummary'

const baseUrl = '/burger';

class Checkout extends Component {
    state = {
        baseUrl: '',
        locationPath: '',
        ingredients: {tikki: 0, bacon: 0, cheese: 0, salad: 0}
    }

    componentDidMount() {
        console.log('[Checkout.js] componentDidMount', this.props);

        const urlParams = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let pair of urlParams.entries()) {
            // ['salad', 1]
            ingredients[pair[0]] = +pair[1];
        }
        this.setState({ locationPath: this.props.match.path, ingredients: ingredients });
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    confirmCheckoutHandler = () => {
        this.props.history.replace(this.state.locationPath + '/contact-data');
    }

    makeOrderHandler = (event) => {
        const data = {
            ingredients: this.state.ingredients,
            totalPrice: 100,
            customer: {
                name: "Ashish Goyal",
                email: "ashish@example.com"
            },
            address: {
                street: "test street 1",
                zipcode: "145322",
                country: "India"
            }
        };

        axiosOrder.post('/posts', data)
            .then(response => {
                // console.log('[checkout.js] success - ', response);
                this.props.history.replace(baseUrl + '/orders');
            })
            .catch(error => {
                console.log('[checkout.js] error - ', error);
            })
            .then(response => {
            });
    }

    render() {
        return (
            <Auxiliary>
                <CheckoutSummary
                    ingredients={ this.state.ingredients }
                    cancelCheckout={ this.cancelCheckoutHandler }
                    confirmCheckout={ this.confirmCheckoutHandler } />
                <Route path={this.state.locationPath + '/contact-data'} render={() => <button onClick={this.makeOrderHandler}>Make Order</button>} />
            </Auxiliary>
        );
    }
}

export default Checkout;