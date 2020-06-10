import { createStore, combineReducers } from 'redux';
import { counterReducer, resultReducer } from './reducers/assign4Reducer';
import burgerBuilderReducer from './reducers/burgerBuilder';

const rootReducer = combineReducers({
    assign4Counter: counterReducer,
    assign4Result: resultReducer,
    burgerBuilder: burgerBuilderReducer,
})

const store = createStore(rootReducer);

export default store