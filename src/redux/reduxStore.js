import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import socialReducer from './socialReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  social: socialReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store