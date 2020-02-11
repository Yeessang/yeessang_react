import {connect} from 'react-redux'

import {addPerson} from '../redux/actions/person_action'

import Person from '../components/person/person'

export default connect(
    state => ({personArr:state.personArr}),
    {addPerson}
)(Person)