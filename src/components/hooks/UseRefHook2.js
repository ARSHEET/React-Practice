import React, { Component } from 'react'

 class UseRefHook2 extends Component {
     interval
     constructor(props) {
         super(props)
     
         this.state = {
              timer: 0
         }
     }
     componentDidMount(){
         this.interval = setInterval(()=>{
             this.setState(prevState=> ({ timer: prevState.timer + 10 }))
         }, 1000)
     }

     componentWillUnmount(){
         clearInterval(this.interval)
     }
     
    render() {
        return (
            <div>
               Class Timer- {this.state.timer} 
               <button onClick={()=>clearInterval(this.interval)}>Clear</button>
            </div>
        )
    }
}

export default UseRefHook2
