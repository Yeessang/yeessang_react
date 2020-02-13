import {connect} from 'react-redux'

import Person from '../components/person/person'

import {addPerson} from '../redux/actions/person_action'

export default connect(
    state => ({personArr:state.personArr}),
    {addPerson}
)(Person)