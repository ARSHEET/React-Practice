import React from 'react'
import useCounter from '../custom Hooks/useCounter'

function CustomHookCounter2() {
    
    const [count, increment, decrement, reset] = useCounter(10,10)

    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment Count</button>
            <button onClick={decrement}>Decrement Count</button>
            <button onClick={reset}>Reset Count</button>
        </div>
    )
}

export default CustomHookCounter2
