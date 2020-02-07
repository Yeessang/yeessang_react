import React, { Component } from 'react'
const newsArr = ['news001','news002','news003']
export default class HomeNews extends Component {
    render() {
        return (
            <div>
                <ul>
                    {   
                        newsArr.map((news,index) => {
                            return <li key={index}><a href='#1'>{news}</a></li>
                        })
                    }
                </ul>
                <hr />
            </div>
        )
    }
}
