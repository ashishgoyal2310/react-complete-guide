import React, { Component } from 'react';
import Burger from '../../components/Burger'
import BuildControls from '../../components/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary'

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
        // showOrderSummaryModal: false,
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

    render() {
        const btnDisables = { ...this.state.ingredients };
        for (let key in btnDisables) {
            btnDisables[key] = btnDisables[key] <= 0
        }

        return (
            <React.Fragment>
                <Modal
                    show={this.state.showOrderSummaryModal}
                    hideOrderSummary={this.hideOrderSummaryModalHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls
                    btnDisables={btnDisables}
                    totalPrice={this.state.totalPrice}
                    addIngredients={this.addIngredientsHandler}
                    removeIngredients={this.removeIngredientsHandler}
                    showOrderSummary={this.showOrderSummaryModalHandler}
                    isPurchasable={this.state.isPurchasable} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;