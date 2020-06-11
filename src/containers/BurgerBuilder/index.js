import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger'
import BuildControls from '../../components/BuildControls'
import Modal from '../../components/UI/Modal'
import OrderSummary from '../../components/Burger/OrderSummary.js'
import Spinner from '../../components/UI/Spinner'

import withErrorHandler from '../../hoc/withErrorHandler'
import { instanceOrder as axiosOrder } from '../axiosInstance'
import * as actionTypes from '../../reduxStores/reducers/actions'


class BurgerBuilder extends Component {
    state = {
        baseUrl: '',
        totalPrice: 3,
        isPurchasable: false,
        showOrderSummaryModal: false,
        showOrderSummaryLoader: false,
    }

    componentDidMount() {
        console.log('[BurgerBuilder.js] componentDidMount', this.props);
        // this.setState({ baseUrl: this.props.match.path });

        // const ingredientsData = {
        //     salad: 0,
        //     bacon: 0,
        //     cheese: 0,
        //     tikki: 0
        // };

        // axiosOrder.get('/posts')
        //     .then(response => {
        //         if (response && response.data) {
        //             this.setState({ ingredients: ingredientsData });
        //         }
        //     })
        //     .catch(error => { console.log('error - ', error); });
    }

    isPurchasableHandler = () => {
        const updatedIngredients = { ...this.props.ingredients };
        const sum = Object.keys(updatedIngredients)
            .map( igKey => updatedIngredients[igKey])
            .reduce( (updatedCnt, nxtEle) => {
                return updatedCnt + nxtEle
            }, 0)
        return sum > 0;
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
        this.setState( {showOrderSummaryLoader: true} );

        const queryParams = [];
        for (let key in this.state.ingredients) {
            let uri = `${key}=${this.state.ingredients[key]}`;
            queryParams.push(encodeURI(uri));
        }

        this.props.history.push({
            pathname: this.state.baseUrl + '/checkout',
            search: '?' + queryParams.join('&')
        });
    }

    render() {
        const propsState = this.props;
        const btnDisables = { ...propsState.ingredients };
        for (let key in btnDisables) {
            btnDisables[key] = btnDisables[key] <= 0
        }

        let burgerEle = <Spinner />
        let orderSummaryEle = null;
        if (propsState.ingredients) {
            burgerEle = (
                <Auxiliary>
                    <Burger ingredients={ propsState.ingredients } />
                    <BuildControls
                        btnDisables={btnDisables}
                        totalPrice={ propsState.totalPrice.toFixed(2) }
                        addIngredients={ propsState.onAddIngredientsHandler }
                        removeIngredients={ propsState.onRemoveIngredientsHandler }
                        showOrderSummary={this.showOrderSummaryModalHandler}
                        isPurchasable={this.isPurchasableHandler()} />
                </Auxiliary>
            );

            orderSummaryEle = <OrderSummary
                ingredients={propsState.ingredients}
                totalPrice={ propsState.totalPrice.toFixed(2) }
                hideOrderSummary={this.hideOrderSummaryModalHandler}
                purchaseContinue={this.purchaseContinueHandler} />
            if (this.state.showOrderSummaryLoader) {
                orderSummaryEle = <Spinner />
            }
        }

        return (
            <Auxiliary>
                <Modal
                    show={this.state.showOrderSummaryModal}
                    hideOrderSummary={this.hideOrderSummaryModalHandler}>
                    { orderSummaryEle }
                </Modal>
                { burgerEle }
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

const mapDispatchToProps = (dispatch) => {
    return {
        onAddIngredientsHandler: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onRemoveIngredientsHandler: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName}),
    }
}

const connection = connect(mapStateToProps, mapDispatchToProps);

export default connection(withErrorHandler(BurgerBuilder, axiosOrder));