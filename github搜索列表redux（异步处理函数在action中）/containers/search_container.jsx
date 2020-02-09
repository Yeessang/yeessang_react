import Search from '../components/search/search'
import {getUsers,getUsersAsync} from '../redux/actions/search_action'
import {connect} from 'react-redux'

export default connect(
    state => ({...state.searchUsers}),
    {getUsers,getUsersAsync}
)(Search)