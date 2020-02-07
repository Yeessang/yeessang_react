import React, { Component } from 'react'
import Item from '../item/item';
import PubSub from 'pubsub-js'
export default class List extends Component {
    state = {
        isFirst:true,
        isLoading:false,
        error:'',
        users:[]
    }
    componentDidMount(){
        const changeState = (msg,data) => {
            this.setState(data)
        }
        PubSub.subscribe('users',changeState)
    }
    render() {
        const {isFirst,isLoading,error,users} = this.state;
        if(isFirst){
            return <h2>请输入，点击搜索</h2>
        }else if(isLoading){
            return <h2>Loading....</h2>
        }else if(error){
            return <h2>{error}</h2>
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
