import React, { Component } from 'react'
import HomeMessageDetail from '../home_message_detail/home_message_detail'
import {Route,Link} from 'react-router-dom'
import {Button} from 'antd'
import '../../../node_modules/antd/dist/antd.css'
export default class HomeMessage extends Component {
    state = {
        message:[]
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                message:[
                    {id:'001',title:'我要努力学习1',content:'摆正心态，不骄不躁，保持耐心'},
                    {id:'002',title:'我要努力学习2',content:'摆正心态，不骄不躁，保持耐心'},
                    {id:'003',title:'我要努力学习3',content:'摆正心态，不骄不躁，保持耐心'},
                    {id:'004',title:'我要努力学习4',content:'摆正心态，不骄不躁，保持耐心'}
                ]
            })
        },1000)
    }

    pushToCheck = (id) => {
        this.props.history.push(`/home/message/detail/${id}`)
    }
    replaceToCheck = (id) => {
        this.props.history.replace(`/home/message/detail/${id}`)
    }
    back = () => {
        this.props.history.goBack();
    }
    forward = () => {
        this.props.history.goForward();
    }
    
    render() {
        return (
            <div>
                  <ul>
                    {
                        this.state.message.map((message) => {
                          return <li key={message.id}>
                                    <Link to={`/home/message/detail/${message.id}`}>{message.title}</Link>&nbsp;&nbsp;
                                    <Button  type="primary" onClick={()=>{this.pushToCheck(message.id)}}>push查看</Button>&nbsp;&nbsp;
                                    <Button  type="primary" onClick={()=>{this.replaceToCheck(message.id)}}>replace查看</Button>
                                </li>
                        })
                    }
                  </ul>
                    <Button  type="primary" onClick={this.back}>回退</Button>&nbsp;&nbsp;
                    <Button  type="primary" onClick={this.forward}>前进</Button>
                  <hr/>
                  <Route path='/home/message/detail/:id' component={HomeMessageDetail}/>
            </div>
        )
    }
}
