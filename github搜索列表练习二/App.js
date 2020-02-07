import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'
export default class App extends Component {
    state = {
        isFirst:true,
        isLoading:false,
        error:'',
        users:[],
        searchKeyword:''
    }
    updateAppStateFromSearch = (newState) => {
        this.setState(newState)
    }
    
    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <Search {...this.state} updateAppStateFromSearch={this.updateAppStateFromSearch}/>
                </section>
                <List {...this.state}/>
            </div>
        )
    }
}
