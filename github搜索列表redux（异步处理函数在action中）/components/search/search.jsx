import React, { Component } from 'react'
export default class Search extends Component {
    searchRef = React.createRef()
    searchClick = () => {
        const {value} = this.searchRef.current;
        this.props.getUsers({isFirst:false,isLoading:true})
        console.log(this.props)
        this.props.getUsersAsync(value)
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
