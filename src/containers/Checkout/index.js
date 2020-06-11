import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import { instanceOrder as axiosOrder } from '../axiosInstance'
import Auxiliary from '../../hoc/Auxiliary'
import withErrorHandler from '../../hoc/withErrorHandler'
import CheckoutSummary from '../../components/Burger/CheckOutSummary'
import ContactForm from '../../components/Burger/ContactForm'

const baseUrl = '/burger';

class Checkout extends Component {
    state = {
        locationPath: '',
    }

    componentDidMount() {
        console.log('[Checkout.js] componentDidMount', this.props);
        this.setState({ locationPath: this.props.match.path });
    }

    cancelCheckoutHandler = () => {
        this.props.history.goBack();
    }

    confirmCheckoutHandler = () => {
        this.props.history.replace(this.state.locationPath + '/contact-data');
    }

    makeOrderHandler = (contactFormdata) => {
        const propsState = this.props;
        const data = {
            ...contactFormdata,
            ingredients: propsState.ingredients,
            totalPrice: propsState.totalPrice,
        };

        // console.log('[Checkout.js] makeOrderHandler...', data);
        axiosOrder.post('/posts', data)
            .then(response => {
                // console.log('[checkout.js] success - ', response);
                if (response && response.data) {
                    this.props.history.replace(baseUrl + '/orders');
                }
            })
            .catch(error => {
                console.log('[checkout.js] error - ', error);
            })
            .then(response => {
            });
    }

    render() {
        const propsState = this.props;
        let checkOutSummaryEle = null;
        if (Object.keys(propsState.ingredients).length) {
            checkOutSummaryEle = <CheckoutSummary
                ingredients={ propsState.ingredients }
                cancelCheckout={ this.cancelCheckoutHandler }
                confirmCheckout={ this.confirmCheckoutHandler } />
        } else {
            checkOutSummaryEle = <Redirect to={baseUrl} />
        }

        return (
            <Auxiliary>
                { checkOutSummaryEle }
                <Route
                    path={this.state.locationPath + '/contact-data'}
                    component={() => <ContactForm makeOrder={this.makeOrderHandler} />} />
            </Auxiliary>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice
    }
}

const connection = connect(mapStateToProps, null);

export default connection(withErrorHandler(Checkout, axiosOrder));