import counterReducer from './counter_reducer'
import personReducer from './person_reducer'
import {combineReducers} from 'redux'


export default combineReducers({
    count:counterReducer,
    persons:personReducer
})

//此时redux 中保存的状态格式是

// {
//     count:0,
//     persons:[{}]
// }