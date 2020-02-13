import {connect} from 'react-redux'

import Counter from '../components/counter'

import {increment,decrement,incrementAsync} from '../redux/actions/counter_action'

export default connect(
    state=>({...state}),
    {increment,decrement,incrementAsync}
)(Counter)