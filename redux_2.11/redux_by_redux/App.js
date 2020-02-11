import React, { Component } from 'react'
import Counter from './components/counter'
import Person from './components/person/person'
export default class App extends Component {
    render() {
        const {store} = this.props
        return (
            <div>
                <Counter store={store}/>
                <Person store={store}/>
            </div>
        )
    }
}
