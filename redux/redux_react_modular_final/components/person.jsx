import React, { Component } from 'react'
export default class Person extends Component {
    handleClick = () => {
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        this.props.addPerson({name,age})
    }
    render() {
        console.log(this)
        return (
            <div>
                <br/>
                姓名：<input ref='name'/>
                <br/>
                年龄：<input ref='age'/>
                <br/>
                <button onClick={this.handleClick}>增加这个人</button>
                <br/>
                <ul>
                    {
                        this.props.total.map((person,index) => {
                            return <li key={index}>name:{person.name},age:{person.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}