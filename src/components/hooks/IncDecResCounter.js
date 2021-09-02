import React, {useState} from 'react'

function IncDecResCounter() {
    const initialValue = 0
    const[count, setCount] = useState(initialValue)
    return (
        <div>
           <b> Count:</b> {count} <br/>
            <button onClick={()=> setCount(initialValue)}>Reset</button><br/>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button><br/>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    )
}

export default IncDecResCounter
