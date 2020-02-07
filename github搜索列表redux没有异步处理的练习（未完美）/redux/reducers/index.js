import searchUsersReducer from './search_reducer' 
import {combineReducers} from 'redux'

export default combineReducers({
    searchUsers:searchUsersReducer
})