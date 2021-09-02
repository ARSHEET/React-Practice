import React, {useState, useEffect} from 'react'

function CounterMethWithEffect() {
     const[count, setCount] = useState(0)


    const tick = () => {
        setCount(count => count + 1)
    }

    useEffect(()=>{
        const timer = setInterval(tick, 1000)
         return ()=>{
            clearInterval(timer)
        }
    }, [])
    
    return (
        <div>
           <h4>Function based Counter: {count}</h4> 
        </div>
    )
}

export default CounterMethWithEffect
