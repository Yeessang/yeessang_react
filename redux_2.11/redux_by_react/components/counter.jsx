import React, { Component } from 'react'
import {Button,Select,Modal } from 'antd'
const {Option} = Select
export default class counter extends Component {
    state = {
        counter:0,
    }
    handleChange = (value) => {
        this.selectNumber = value 
    }
    increment = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        const {counter} = this.state;
        this.setState({counter:counter + +selectNumber})
    }
    decrement = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        const {counter} = this.state;
        this.setState({counter:counter - +selectNumber})
    }
    incrementIfOdd = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        const {counter} = this.state;
        if(counter % 2 === 1){
            this.setState({counter:counter + +selectNumber})
        } 
    }
    incrementAsync = () => {
        if(!this.selectNumber) return Modal.warning({
            title: '提示信息',
            content: '请选择您想要的数字',
          });
        const {selectNumber} = this;
        const {counter} = this.state;
        setTimeout(() => {
            this.setState({counter:counter + +selectNumber})
        },1000)
    }
    
    render() {
        let {counter} = this.state;
        return (
            <div>
                <h3>Counter is {counter}</h3>
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
