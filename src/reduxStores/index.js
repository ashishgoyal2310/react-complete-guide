import { createStore } from 'redux'

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    console.log('[reduxStores.js] rootReducer', state, action);

    switch (action.type) {
        case 'INC':
            return { counter: state.counter + action.value };
        case 'DEC':
            return { counter: state.counter - action.value };
        case 'ADD':
            return { counter: state.counter + action.value };
        case 'SUB':
            return { counter: state.counter - action.value };
        default:
            return state
    }
}

const store = createStore(rootReducer);

export default store