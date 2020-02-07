import React, { Component } from 'react'
const messageDetails = [
    {id: 1, title: 'Message001', content: '我爱你, 中国'},
    {id: 3, title: 'Message003', content: '我爱你, 老婆'},
    {id: 6, title: 'Message006', content: '我爱你, 孩子'},
]
export default class HomeMessageCurrent extends Component {
    render() {
        console.log(this);
        const {id} = this.props.match.params;
        const result = messageDetails.find((message) => {
            return message.id === +id;
        })
        return (
            <div>
                <ul>
                    <li>{result.id}</li>
                    <li>{result.title}</li>
                    <li>{result.content}</li>
                </ul>
            </div>
        )
    }
}
