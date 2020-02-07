import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component{
    searchRef = React.createRef()
    handleClick= () => {
        let {searchKeyWord,changeState} = this.props;
        searchKeyWord = this.searchRef.current.value;
        console.log(searchKeyWord)
        axios.get(`https://api.github.com/search/users?q=${searchKeyWord}`)
        .then(
            response => {
                console.log(response.data.items)
                changeState({
                    isLoading:false,
                    users:response.data.items,
                })
            }
        )
        .catch(
            error => {
                changeState({
                    isLoading:false,
                    error:error.message
                })
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
