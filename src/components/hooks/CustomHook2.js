import React, {useState} from 'react'
import useDocTitle from '../custom Hooks/useDocTitle'

function CustomHook2() {
    const [count, setCount] = useState(0)

   useDocTitle(count)
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count-{count}</button>
        </div>
    )
}

export default CustomHook2
