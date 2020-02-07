import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        count:0
    }
    increment = () => {
        const {value} = this.refs.number;
        const {count} = this.state;
        this.setState({count:count+(+value)})
    }
    decrement = () => {
        const {value} = this.refs.number;
        const {count} = this.state;
        this.setState({count:count-(+value)})
    }
    incrementIfOdd = () => {
        const {value} = this.refs.number;
        const {count} = this.state;
        if(count % 2 === 1){
            this.setState({count:count+(+value)})
        }
    }
    incrementAsync = () => {
        const {value} = this.refs.number;
        const {count} = this.state;
        setTimeout(() => {
            this.setState({count:count+(+value)})
        },500)
    }
    render() {
        return (
            <div>
                <h2>Counter is {this.state.count}</h2>
                <select ref='number'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}