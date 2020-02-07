import React, { Component } from 'react'
const messageDetails = [
    {id: 1, title: 'Message001', content: '我爱你, 中国'},
    {id: 3, title: 'Message003', content: '我爱你, 老婆'},
    {id: 6, title: 'Message006', content: '我爱你, 孩子'},
  ]
export default class Current extends Component {
    // state = {
    //     messages:[

    //     ]
    // }
    render() {
        console.log(this)
        const {id} = this.props.match.params;
        const result = messageDetails.find((item) => {
            return item.id === +id
        })
        return (
            <ul>
                <li>ID:{result.id}</li>
                <li>Title:{result.title}</li>
                <li>Content:{result.content}</li>
            </ul>
        )
    }
}
