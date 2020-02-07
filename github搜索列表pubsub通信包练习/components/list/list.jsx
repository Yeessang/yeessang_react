import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Item from '../item/item'

export default class List extends Component{
    state = {
        users:[],
        isLoading:true,
        error:''
    }
    componentDidMount(){
        let mySubscriber = (msg, data) => {
            this.setState({users:data,isLoading:false})
        };
        PubSub.subscribe('users', mySubscriber);
    }
    render(){
        const {users,isLoading,error} = this.state;
        if(isLoading){
            return <h2>isLoading...</h2>
        }else if(error){
            return <h2>error</h2>
        }else{
            return (
                <div className="row">
                    {
                        users.map((user) => {
                            return <Item {...user} key={user.id}/>
                        })
                    } 
                </div>
            )
        }
        
    }
}