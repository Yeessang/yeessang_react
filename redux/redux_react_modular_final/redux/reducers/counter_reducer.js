//redux中的reducer，用于真正去加工状态，获取到：previousState，action
let initState = 200;
export default function(previousState=initState,action){
    const {type,data} = action;
    switch (type) {
        case 'increment':
            return previousState + data;
        case 'decrement':
            return previousState - data;
        default:
            return previousState;
    }
}