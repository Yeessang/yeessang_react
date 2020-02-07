import {ADDPERSON} from '../action_types'

export const addPerson = (person) => {
    return {type:ADDPERSON,data:person}
}