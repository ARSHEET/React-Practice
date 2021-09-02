import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterWithReducerHook() {

   const[count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count: {count}</div><br/>
            <button onClick={()=> dispatch('reset')}>Reset</button><br/>
            <button onClick={()=> dispatch('increment')}>Increment</button><br/>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default CounterWithReducerHook
