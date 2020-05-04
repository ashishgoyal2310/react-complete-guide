import React, { Component } from 'react';
import Burger from '../../components/Burger'

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            tikki: 2
        }
    }
    render() {
        return (
            <React.Fragment>
                <Burger ingredients={ this.state.ingredients } />
                <div>Build Burger</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;