import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    counterResult: [],
}

const reducer = (state = initialState, action) => {
    console.log('[assign4Reducer.js] reducer', state, action);

    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + action.value };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - action.value };
        case actionTypes.ADDITION:
            return { ...state, counter: state.counter + action.value };
        case actionTypes.SUBSTRACTION:
            return {...state, counter: state.counter - action.value };
        case actionTypes.SHOW_RESULTS:
            return {
                ...state,
                counterResult: state.counterResult.concat({id: new Date().getTime(), value: state.counter})
            }
        case actionTypes.REMOVE_RESULT:
            const updatedResults = state.counterResult.filter((resultDct, index) => (
                resultDct.id !== action.resultId));
            return {
                ...state,
                counterResult: updatedResults
            }
        default:
            return state
    }
}

export default reducer