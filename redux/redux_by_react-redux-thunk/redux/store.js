//引入createStore，用于创建redux 最核心的store
import {createStore,applyMiddleware} from 'redux'
//引入 reducer，用于真正操作状态
import reducer from './reducer'
//引入redux-thunk，用于异步的action
import thunk from 'redux-thunk'
//默认暴露创建的store
export default createStore(reducer,applyMiddleware(thunk))