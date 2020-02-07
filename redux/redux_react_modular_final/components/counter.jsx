import React, { Component } from 'react'
export default class Counter extends Component {
    increment = () => {
        const {value} = this.refs.number;
        this.props.increment(value)
    }
    decrement = () => {
        const {value} = this.refs.number;
        this.props.decrement(value)
    }
    incrementIfOdd = () => {
        const {value} = this.refs.number;
        const {count} = this.props;
        if(count % 2 === 1){
            this.props.increment(value)
        }
    }
    incrementAsync = () => {
        const {value} = this.refs.number;
        setTimeout(() => {
            this.props.incrementAsync(value,1000)
        },500)
    }
    render() {
        console.log(this)
        return (
            <div>
                <h2>Counter is {this.props.count}</h2>
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