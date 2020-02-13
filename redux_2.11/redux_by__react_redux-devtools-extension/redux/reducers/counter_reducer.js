import {INCREMENT,DECREMENT} from '../action_type'
let init = 0

export default function (preState=init,action){
   const {type,data} = action
   switch (type) {
      case INCREMENT:
         return preState + data
      case DECREMENT:
         return preState - data
      default:
         return preState
   }
}