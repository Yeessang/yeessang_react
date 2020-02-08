import React, { Component } from 'react'
const messageArr =[
    {id:'001',title:'我要努力学习1',content:'摆正心态，不骄不躁，保持耐心'},
    {id:'002',title:'我要努力学习2',content:'摆正心态，不骄不躁，保持耐心'},
    {id:'003',title:'我要努力学习3',content:'摆正心态，不骄不躁，保持耐心'},
    {id:'004',title:'我要努力学习4',content:'摆正心态，不骄不躁，保持耐心'}
]
export default class HomeMessageDetail extends Component {
    render() {
        const {id} = this.props.match.params;
        const result = messageArr.find((message) => {
            return message.id === id;
        })
        return (
            <div>
                <li>id:{result.id}</li>
                <li>title:{result.title}</li>
                <li>content:{result.content}</li>
            </div>
        )
    }
}
