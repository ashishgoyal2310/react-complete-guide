import React, { Component } from 'react';
import Burger from '../../components/Burger'
import BuildControls from '../../components/BuildControls'

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
        totalPrice: 3
    }

    addIngredientsHandler = (type) => {
        const currentCount = this.state.ingredients[type];
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = currentCount + 1;

        const currentTotalPrice = this.state.totalPrice;
        const ingredientCost = INGREDIENTS_PRICE[type];
        const updatedTotalPrice = currentTotalPrice + ingredientCost;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedTotalPrice});
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
    }

    render() {
        const btnDisables = { ...this.state.ingredients };
        for (let key in btnDisables) {
            btnDisables[key] = btnDisables[key] === 0
        }

        return (
            <React.Fragment>
                <Burger ingredients={ this.state.ingredients } />
                <BuildControls
                    btnDisables={btnDisables}
                    totalPrice={this.state.totalPrice}
                    addIngredients={this.addIngredientsHandler}
                    removeIngredients={this.removeIngredientsHandler} />
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;