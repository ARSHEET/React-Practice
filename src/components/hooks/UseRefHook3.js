import React, {useEffect, useState, useRef} from 'react'

function UseRefHook3() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    
    useEffect(() => {
        //effect
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            //cleanup
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            With UseEffect Counter Timer - {timer}
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear</button>
        </div>
    )
}

export default UseRefHook3
