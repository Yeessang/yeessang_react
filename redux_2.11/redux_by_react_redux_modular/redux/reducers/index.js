import {combineReducers} from 'redux'
import PersonReducer from './addPerson_reducer'
import CounterReducer from './counter_reducer'

export default combineReducers({
    personArr:PersonReducer,
    counter:CounterReducer
})