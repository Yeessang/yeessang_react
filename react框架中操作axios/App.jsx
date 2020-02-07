
import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    state = {
        resName : '',
        resUrl : '',
        isLoading : true,
        error : ''
    }
    componentDidMount(){
        axios.get('https://api.github.com/search/repositories?q=r&sort=stars')
        .then(
            (response) => {console.log(response)},
            (error) => {console.log(error)}
        )
    }
    render() {
        const {resName,resUrl,isLoading,error} = this.state;
        if(isLoading){
            return <h2>isLoading...</h2>
        }else if(error){
            return <h2>{error}</h2>
        }else{
            return (
                <h2>
                  最受欢迎的是<a href={resUrl}>{resName}</a>  
                </h2>
            )
        }
        
    }
}
