import React, { Component } from 'react';
import Burger from '../../components/Burger'
import BuildControls from '../../components/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'
import Spinner from '../../components/UI/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler'
import { instanceOrder as axiosOrder } from '../axiosInstance'

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.5,
    cheese: 1.3,
    tikki: 0.7
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            tikki: 0
        },
        totalPrice: 3,
        isPurchasable: false,
        showOrderSummaryModal: false,
        showLoader: false,
    }

    addIngredientsHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = currentCount + 1;

        const currentTotalPrice = this.state.totalPrice;
        const ingredientCost = INGREDIENTS_PRICE[type];
        const updatedTotalPrice = currentTotalPrice + ingredientCost;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
        this.isPurchasableHandler();
    }

    removeIngredientsHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        if (currentCount <= 0) {
            return;
        }
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = currentCount - 1;

        const currentTotalPrice = this.state.totalPrice;
        const ingredientCost = INGREDIENTS_PRICE[type];
        const updatedTotalPrice = currentTotalPrice - ingredientCost;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
        this.isPurchasableHandler();
    }

    isPurchasableHandler = () => {
        this.setState((prevState, props) => {
            const updatedIngredients = { ...prevState.ingredients };
            const sum = Object.keys(updatedIngredients)
                .map( igKey => updatedIngredients[igKey])
                .reduce( (updatedCnt, nxtEle) => {
                    return updatedCnt + nxtEle
                }, 0)
            return { isPurchasable: sum > 0 };
        });
    }

    showOrderSummaryModalHandler = () => {
        this.setState((prevState, props) => {
            return { showOrderSummaryModal: true }
        });
    }

    hideOrderSummaryModalHandler = () => {
        this.setState((prevState, props) => {
            return { showOrderSummaryModal: false }
        });
    }

    purchaseContinueHandler = () => {
        this.setState( {showLoader: true} );

        const data = {
            ingredients: this.state.ingredients,
            totalPrice: this.state.totalPrice,
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
                console.log('success - ', response);
            })
            .catch(error => {
                console.log('error - ', error);
            })
            .then(response => {
                this.setState( {showLoader: false, showOrderSummaryModal: false} );
            });
    }

    render() {
        const btnDisables = { ...this.state.ingredients };
        for (let key in btnDisables) {
            btnDisables[key] = btnDisables[key] <= 0
        }

        let orderSummaryEle = <Spinner />
        if (!this.state.showLoader) {
            orderSummaryEle = <OrderSummary
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice.toFixed(2)}
                hideOrderSummary={this.hideOrderSummaryModalHandler}
                purchaseContinue={this.purchaseContinueHandler} />
        }

        return (
            <React.Fragment>
                <Modal
                    show={this.state.showOrderSummaryModal}
                    hideOrderSummary={this.hideOrderSummaryModalHandler}>
                    { orderSummaryEle }
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls
                    btnDisables={btnDisables}
                    totalPrice={this.state.totalPrice.toFixed(2)}
                    addIngredients={this.addIngredientsHandler}
                    removeIngredients={this.removeIngredientsHandler}
                    showOrderSummary={this.showOrderSummaryModalHandler}
                    isPurchasable={this.state.isPurchasable} />
            </React.Fragment>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axiosOrder);