import {SEARCHUSERS} from '../action_types'
import axios from 'axios'
export const getUsers = (usersArr) => ({type:SEARCHUSERS,data:usersArr}) 
export const getUsersAsync = (keyword) => {
    return (dispatch) => {
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
        .then(
            (response) => {
                dispatch(getUsers({isLoading:false,users:response.data.items}))
            }
        )
        .catch(
            (error) => {
                dispatch(getUsers({isLoading:false,error:error.message}))
            }
        )
    }
    
}

