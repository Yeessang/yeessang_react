import { SEARCHUSERS } from "../action_types";

let initState = {
    isFirst:true,
    isLoading:false,
    error:'',
    users:[]
}

export default function searchUsers(previousState=initState,action){
    const {type,data} = action;
    switch (type) {
        case SEARCHUSERS:
            console.log('1');
            console.log(data)
            console.log(Object.assign({},previousState,data))
            return Object.assign({},previousState,data)
        default:
            return previousState
    }
}