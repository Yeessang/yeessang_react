import React, { Component } from 'react'
import {Button,Select,Modal } from 'antd'
import {increment,decrement} from '../redux/actions/counter_action'
const {Option} = Select

export default class counter extends Component {
    handleChange = (value) => {
        this.selectNumber = value 
    }
    increment = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        
        this.props.store.dispatch(increment(+selectNumber))
    }
    decrement = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        this.props.store.dispatch(decrement(+selectNumber))
    }
    incrementIfOdd = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        const counter = this.props.store.getState().counter;
        if(counter % 2 === 1){
            this.props.store.dispatch(increment(+selectNumber))
        } 
    }
    incrementAsync = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        setTimeout(() => {
            this.props.store.dispatch(increment(+selectNumber))
        },1000)
    }
    
    render() {
        return (
            <div>
                <h3>Counter is {this.props.store.getState().counter},人物列表人数为{this.props.store.getState().personArr.length}</h3>
                <Select style={{width:'10%'}} placeholder='请选择' defaultValue='请选择' autoFocus={true} onChange={this.handleChange}>
                    <Option value='1'>1</Option>
                    <Option value='2'>2</Option>
                    <Option value='3'>3</Option>
                </Select>&nbsp;
                <Button type="primary" icon="plus" onClick={this.increment}></Button>&nbsp;
                <Button type="primary" icon="minus" onClick={this.decrement}></Button>&nbsp;
                <Button type="primary" onClick={this.incrementIfOdd}>increment if odd</Button>&nbsp;
                <Button type="primary" onClick={this.incrementAsync}>increment async</Button>&nbsp;
            </div>
        )
    }
}
