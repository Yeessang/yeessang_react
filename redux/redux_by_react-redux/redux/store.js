//引入createStore，用于创建redux 最核心的store
import {createStore} from 'redux'
//引入 reducer，用于真正操作状态
import reducer from './reducer'
//默认暴露创建的store
export default createStore(reducer)