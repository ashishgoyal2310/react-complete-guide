import { createStore } from 'redux'

const initialState = {
    counter: 0,
    counterResult: [],
}

const rootReducer = (state = initialState, action) => {
    console.log('[reduxStores.js] rootReducer', state, action);

    switch (action.type) {
        case 'INC':
            return { ...state, counter: state.counter + action.value };
        case 'DEC':
            return { ...state, counter: state.counter - action.value };
        case 'ADD':
            return { ...state, counter: state.counter + action.value };
        case 'SUB':
            return {...state, counter: state.counter - action.value };
        case 'RESULTS':
            return {
                ...state,
                counterResult: state.counterResult.concat({id: new Date().getTime(), value: state.counter})
            }
        case 'REMOVE_RESULT':
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

const store = createStore(rootReducer);

export default store