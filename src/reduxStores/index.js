import { createStore, combineReducers } from 'redux'
import { counterReducer, resultReducer } from './reducers/assign4Reducer'

const rootReducer = combineReducers({
    assign4Counter: counterReducer,
    assign4Result: resultReducer,
})

const store = createStore(rootReducer);

export default store