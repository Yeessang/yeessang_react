import {combineReducers} from 'redux'

import personReducer from './person_reducer'

import counterReducer from './counter_reducer'

export default combineReducers({
    counter: counterReducer,
    personArr:personReducer    
})