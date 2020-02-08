import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
    searchRef = React.createRef()
    searchClick = () => {
        const {value} = this.searchRef.current;
        PubSub.publish('users',{isFirst:false,isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${value}`)
        .then(
            (response) => {
                PubSub.publish('users',{users:response.data.items,isLoading:false})
            }
        )
        .catch(
            (error) => {
                PubSub.publish('users',{isLoading:false,error:error.message})
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
