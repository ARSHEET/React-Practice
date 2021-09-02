import React, { Component } from 'react'

class IntervalCounterIncDep extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000)
    }

    // componentWillUnmount used to clear timers with interval and to avoid memory leaks 
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    tick = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <h1>Class based Counter: {this.state.count}</h1>
        )
    }
}

export default IntervalCounterIncDep
