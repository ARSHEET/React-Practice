import React, { useState } from 'react'

function FunctionBasedHook() {

    const[count, setCount] = useState(0)

    return (
        <div>
            <button onClick={ () => setCount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default FunctionBasedHook
