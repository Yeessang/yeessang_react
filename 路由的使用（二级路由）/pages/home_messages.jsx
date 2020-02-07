import React, { Component } from 'react'
import Current from './home_messages_current'
import {Route,Link} from 'react-router-dom'
export default class HomeMessages extends Component {
    state = {
        messages:[]
    }
    componentDidMount(){
        // 模拟发送ajax请求
        setTimeout(() => {
            const data = [
            {id: 1, title: 'Message001'},
            {id: 3, title: 'Message003'},
            {id: 6, title: 'Message006'},
            ]
            this.setState({
                messages: data
            })
        }, 1000)
  
    }
    render() {
        return (
            <div>
                <ul>
                  {
                      this.state.messages.map((message) => {
                        return (
                            <li key={message.id}>
                                <Link to={`/home/home-messages/current/${message.id}`}>{message.title}</Link>&nbsp;&nbsp;
                                <button>push查看</button>&nbsp;&nbsp;
                                <button>replace查看</button>
                            </li>
                        )
                      })
                  }
                </ul>
                <button>回退</button>
                <hr />
                <Route path='/home/home-messages/current/:id' component={Current}/>
            </div>
        )
    }
}
