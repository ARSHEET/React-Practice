import React, { Component } from 'react'

class ClassBased extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount=()=>{
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Increment Button {this.state.count}</button>
            </div>
        )
    }
}

export default ClassBased
