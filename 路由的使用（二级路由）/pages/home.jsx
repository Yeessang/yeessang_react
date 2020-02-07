import React, { Component } from 'react'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import HomeMessages from './home_messages'
import HomeNews from './home_news'
export default class About extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <NavLink className="list-group-item" to="/home/home-news" activeClassName='demo'>News</NavLink>
                        </li>
                        <li>
                            <NavLink className="list-group-item" to="/home/home-messages" activeClassName='demo'>Message</NavLink>
                        </li>
                    </ul> 
                </div>
                <Switch>
                    <Route path='/home/home-news' component={HomeNews}/>
                    <Route path='/home/home-messages' component={HomeMessages}/>
                    <Redirect to='/home/home-news'/>
                </Switch>
            </div>
        )
    }
}