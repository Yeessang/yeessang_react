import React, { Component } from 'react'
import SearchContainer from './containers/search_container'
import ListContainer from './containers/list_container'
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <SearchContainer />
                </section>
                <ListContainer />
            </div>
        )
    }
}
