import React, { Component } from 'react'
import './item.css'
export default class Item extends Component {
    render() {
        console.log(this.props);
        const {avatar_url,html_url,login} = this.props;
        return (
            <div className="card">
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                <img src={avatar_url} alt={login} style={{width:'100px'}}/>
                </a>
                <p className="card-text">{login}</p>
            </div>
        )
    }
}
