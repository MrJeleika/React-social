import {combineReducers, legacy_createStore as createStore} from 'redux'
import socialReducer from './socialReducer';

let reducers = combineReducers({
  social: socialReducer,
})

let store = createStore(reducers)

export default store