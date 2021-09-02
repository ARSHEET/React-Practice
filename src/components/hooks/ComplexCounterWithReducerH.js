import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 100
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment100':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement100':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ComplexCounterWithReducerH() {

   const[count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div><b>First Counter: {count.firstCounter}</b></div><br/>
            <div><b>Second Counter: {count.secondCounter}</b></div><br/>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button><br/>
            <button onClick={()=> dispatch({type: 'increment', value: 1})}>Increment</button><br/>
            <button onClick={()=> dispatch({type: 'decrement', value: 1})}>Decrement</button><br/>
            <button onClick={()=> dispatch({type: 'increment', value: 5})}>Increment By 5</button><br/>
            <button onClick={()=> dispatch({type: 'decrement', value: 5})}>Decrement By 5</button>
            <div>
            <button onClick={()=> dispatch({type: 'increment100', value: 1})}>Increment100 Counter</button><br/>
            <button onClick={()=> dispatch({type: 'decrement100', value: 1})}>Decrement100 Counter</button><br/>
            </div>
        </div>
    )
}

export default ComplexCounterWithReducerH
