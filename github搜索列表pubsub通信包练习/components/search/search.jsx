import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component{
    searchRef = React.createRef()
    handleClick= () => {
        let searchKeyWord = this.searchRef.current.value;
        console.log(searchKeyWord)
        axios.get(`https://api.github.com/search/users?q=${searchKeyWord}`)
        .then(
            response => {
                console.log(response.data.items)
                PubSub.publish('users',response.data.items);
            }
        )
        .catch(
            error => {
                PubSub.publish('users',error.message);
            }
        )
    }
    render(){
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." ref={this.searchRef}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleClick}>Go!</button>
                </span>
            </div>
        )
    }
}
