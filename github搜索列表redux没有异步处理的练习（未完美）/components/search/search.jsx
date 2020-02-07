import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {
    searchRef = React.createRef()
    searchClick = () => {
        const {value} = this.searchRef.current;
        this.props.getUsers({isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${value}`)
        .then(
            (response) => {
                this.props.getUsers({isLoading:false,users:response.data.items})
                console.log(this.props)
            }
        )
        .catch(
            (error) => {
                this.props.getUsers({isLoading:false,error:error.message})
            }
        )
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="enter the name you search" ref={this.searchRef}/>
                <button onClick={this.searchClick}>Search</button>
            </div>
        )
    }
}
