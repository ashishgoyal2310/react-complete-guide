const redux = required('redux');
const createStore = redux.createStore

// initial state if required
const initialState = []

// Reducer
const rootReducer = (state = initialState, action) => {
    console.log('[Reducer]', state, action);

    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.value]);
        default:
            return state
    }
}

// Store - requires reducer
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispaching Action
store.dispatch({type: "ADD_TODO", text: "To add list item", value: 'Food'})
store.dispatch({type: "ADD_TODO", text: "To add list item", value: 'Play'})
console.log(store.getState())