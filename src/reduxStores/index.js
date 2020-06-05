import { createStore, combineReducers } from 'redux'
import assign4Reducer from './reducers/assign4Reducer'

const rootReducer = combineReducers({
    assign4: assign4Reducer
})

const store = createStore(rootReducer);

export default store