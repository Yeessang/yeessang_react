import React, { Component } from 'react'

export default class Item extends Component{
    render(){
        const {login,html_url,avatar_url} = this.props;
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="thumbnail">
                    <img src={avatar_url} alt={login} className="img-thumbnail" style={{width:'50%'}}/>
                    <div className="caption">
                        <h3>{login}</h3>
                        <p><a href={html_url} className="btn btn-primary" role="button" target="blank">点击进入他/她的Github主页</a> </p>
                    </div>
                </div>
            </div>
        )
    }
}
