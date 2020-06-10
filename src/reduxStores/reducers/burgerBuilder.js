import * as actionTypes from './actions'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        tikki: 0
    },
    totalPrice: 4
}

const INGREDIENTS_PRICE = {
    salad: 0.3,
    bacon: 0.5,
    cheese: 1.3,
    tikki: 0.7
}

const burgerBuilderReducer = (state = initialState, action) => {
    console.log('[Reducer-burgerBuilder.js] burgerBuilderReducer', state, action);

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
            };
        default:
            return state;
    }
}

export default burgerBuilderReducer;