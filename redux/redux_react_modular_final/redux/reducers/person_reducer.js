//redux中的reducer，用于真正去加工状态，获取到：previousState，action
import {ADDPERSON} from '../action_types'
let initState = [{name:'kobe',age:40}];
export default function(previousState=initState,action){
    const {type,data} = action;
    switch (type) {
        case ADDPERSON:
            return [...previousState,data]
        default:
            return previousState;
    }
}