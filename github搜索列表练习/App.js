import React, { Component } from 'react'
import Search from './components/search/search'
import List from './components/list/list'
export default class App extends Component {
    state = {
        isLoading:true,
        users:[],
        error:'',
        searchKeyWord:''
    }
    changeState = (state) => {
        this.setState(state)
    }
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Github搜索列表 <small>Github practice</small></h1>
                    <div className="row">
                        <div className="col-lg-6">
                            <Search {...this.state} changeState={this.changeState}/>
                        </div>
                    </div>
                </div>
                <List {...this.state}/>
            </div>
        )
    }
}
