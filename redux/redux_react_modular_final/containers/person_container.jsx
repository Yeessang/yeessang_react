import Person from '../components/person'
import {addPerson} from '../redux/actions/person_action'
import {connect} from 'react-redux'

export default connect(
    state => ({total:state.persons,long:state.persons.length}),
    {addPerson}
)(Person)
