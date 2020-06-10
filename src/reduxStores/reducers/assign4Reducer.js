import * as actionTypes from './actions';

const initialCounterState = {
    counter: 0,
}

export const counterReducer = (state = initialCounterState, action) => {
    console.log('[assign4Reducer.js] counterReducer', state, action);

    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + action.value };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - action.value };
        case actionTypes.ADDITION:
            return { ...state, counter: state.counter + action.value };
        case actionTypes.SUBSTRACTION:
            return {...state, counter: state.counter - action.value };
        default:
            return state
    }
}

const initialResultState = {
    counterResult: []
}

export const resultReducer = (state = initialResultState, action) => {
    console.log('[assign4Reducer.js] resultReducer', state, action);

    switch (action.type) {
        case actionTypes.SHOW_RESULTS:
            return {
                ...state,
                counterResult: state.counterResult.concat({id: new Date().getTime(), value: action.ctrValue})
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
