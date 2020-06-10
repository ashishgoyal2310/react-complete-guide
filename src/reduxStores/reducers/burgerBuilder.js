import * as actionTypes from './actions'

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        tikki: 0
    },
}

const burgerBuilderReducer = (state = initialState, action) => {
    console.log('[Reducer-burgerBuilder.js] burgerBuilderReducer', state, action);

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {};
        case actionTypes.REMOVE_INGREDIENT:
            return {};
        default:
            return state;
    }
}

export default burgerBuilderReducer;