import React, { Component } from 'react'
import {Button,Select,Modal } from 'antd'
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
        
        this.props.increment(+selectNumber)
    }
    decrement = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        this.props.decrement(+selectNumber)
    }
    incrementIfOdd = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        const counter = this.props.counter;
        if(counter % 2 === 1){
            this.props.increment(+selectNumber)
        } 
    }
    incrementAsync = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        
        this.props.incrementAsync(+selectNumber,500)
    }
    
    render() {
        console.log(this)
        return (
            <div>
                <h3>Counter is {this.props.counter},人物列表人数为{this.props.personArr.length}</h3>
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
