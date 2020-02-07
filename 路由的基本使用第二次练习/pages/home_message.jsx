import React, { Component } from 'react'
import { Link , Route} from 'react-router-dom/cjs/react-router-dom.min'
import HomeMessageCurrent from './home_message_current'

export default class HomeMessage extends Component {
    state = {
        messages:[]
    }

    componentDidMount(){
        setTimeout(() => {
            const data = [
                {id: 1, title: 'Message001'},
                {id: 3, title: 'Message003'},
                {id: 6, title: 'Message006'},
                ]
            this.setState({
                messages: data
            })
        },1000)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map((message) => {
                      return <li key={message.id}>
                                <Link to={`/home/message/current/${message.id}`} >{message.title}</Link>&nbsp;&nbsp;
                                <button>push查看</button>&nbsp;&nbsp;
                                <button>replace查看</button>
                             </li>
                    })}
                </ul>   
                <hr/> 
                <Route path='/home/message/current/:id' component={HomeMessageCurrent}/>
            </div>
        )
    }
}
