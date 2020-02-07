import React, { Component } from 'react'
import {increment,decrement} from '../redux/action_creators'
export default class Counter extends Component {
    increment = () => {
        const {value} = this.refs.number;
        this.props.store.dispatch(increment(value))
    }
    decrement = () => {
        const {value} = this.refs.number;
        this.props.store.dispatch(decrement(value))
    }
    incrementIfOdd = () => {
        const {value} = this.refs.number;
        const count = this.props.store.getState();
        if(count % 2 === 1){
            this.props.store.dispatch(increment(value))
        }
    }
    incrementAsync = () => {
        const {value} = this.refs.number;
        setTimeout(() => {
            this.props.store.dispatch(increment(value))
        },500)
    }
    render() {
        return (
            <div>
                <h2>Counter is {this.props.store.getState()}</h2>
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