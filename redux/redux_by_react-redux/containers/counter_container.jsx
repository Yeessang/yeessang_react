import Counter from '../components/counter'
import {increment,decrement} from '../redux/action_creators'
import {connect} from 'react-redux'
// function mapStateToProps(state){
//     //该方法的返回值会作为props参数进行传递
//     return {count:state} //此行代码相当于 <Counter count={state}>

// }

// function mapDispatchToProps  (dispatch, ownProps) {
//     return {
//         increment: (value) => {
//             dispatch(increment(value))
//         },
//         decrement:(value) => {
//             dispatch(decrement(value))
//         }
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter)
export default connect(
    state => ({count:state}),
    {increment,decrement}
)(Counter)


