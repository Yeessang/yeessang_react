import {ADDPERSON} from '../action_type'

let initPersonArr = [
    {title:'勒布朗',describe:'喜欢以前的勒布朗'},
    {title:'科比',describe:'喜欢科比，希望他的精神可以继续影响我'},
]

export default function(preState=initPersonArr,action){
    const {type,data} = action

    switch (type) {
        case ADDPERSON:
            return [...preState,data]
        default:
            return preState
    }
}