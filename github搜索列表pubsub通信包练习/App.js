
import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Github搜索列表 <small>Github practice</small></h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <Search/>
                        </div>
                    </div>
                </div>
                <List/>
            </div>
        )
    }
}

