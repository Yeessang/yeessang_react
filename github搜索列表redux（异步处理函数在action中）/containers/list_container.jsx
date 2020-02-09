import List from '../components/list/list'
import {connect} from 'react-redux'

export default connect(
    state => ({...state.searchUsers})
)(List)