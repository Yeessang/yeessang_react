import {connect} from 'react-redux'

import {increment,decrement} from '../redux/actions/counter_action'

import Counter from '../components/counter'

export default connect(
    state => ({counter:state.counter,personArr:state.personArr}),
    {increment,decrement}
)(Counter)