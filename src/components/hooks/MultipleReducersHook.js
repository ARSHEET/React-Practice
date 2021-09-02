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

function MultipleReducersHook() {

   const[count, dispatch] = useReducer(reducer, initialState)
   const[countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count: {count}</div><br/>
            <button onClick={()=> dispatch('reset')}>Reset</button><br/>
            <button onClick={()=> dispatch('increment')}>Increment</button><br/>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <div>
            <div>Count: {countTwo}</div><br/>
            <button onClick={()=> dispatchTwo('reset')}>Reset</button><br/>
            <button onClick={()=> dispatchTwo('increment')}>Increment</button><br/>
            <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>
            </div>
        </div>
        
    )
}

export default MultipleReducersHook
