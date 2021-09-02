import React, {useState, useEffect} from 'react'

function FuncMouseEffectH() {

    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logMousePos = e => {
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('called')
        window.addEventListener('mousemove', logMousePos)

        return ()=>{
            console.log('Component Unmounting Code with useEffect')
            window.removeEventListener('mousemove', logMousePos)
        }
    }, [])
    return (
        <div>
            X Co-ordinates = {x}<br/>
            Y Co-ordinates = {y}
        </div>
    )
}

export default FuncMouseEffectH
