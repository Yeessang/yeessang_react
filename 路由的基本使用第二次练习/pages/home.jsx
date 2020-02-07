import React, { Component } from 'react'
import HomeMessage from './home_message'
import HomeNews from './home_news'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
export default class Home extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                  <li>
                    <NavLink className="list-group-item" to="/home/news" activeClassName='demo'>News</NavLink>
                  </li>
                  <li>
                    <NavLink className="list-group-item" to="/home/message" activeClassName='demo'>Message</NavLink>
                  </li>
                </ul>
                <Switch>
                    <Route path='/home/news' component={HomeNews}/>
                    <Route path='/home/message' component={HomeMessage}/>
                    <Redirect to='/home/news' />
                </Switch>
            </div>
        )
    }
}
