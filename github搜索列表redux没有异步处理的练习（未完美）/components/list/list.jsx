import React, { Component } from 'react'
import Item from '../item/item';
export default class List extends Component {
    componentWillReceiveProps(){
        // const changeState = (msg,data) => {
        //     this.setState(data)
        // }
        // PubSub.subscribe('users',changeState)
        console.log(this.props)
    }
    render() {
        console.log(this)
        const {isFirst,isLoading,error,users} = this.props;
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
