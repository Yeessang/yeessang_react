import React, { Component } from 'react'
import Item from '../item/item'
export default class List extends Component{
    render(){
        const {users,isLoading,error} = this.props;
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