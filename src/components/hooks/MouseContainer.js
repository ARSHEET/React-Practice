import React, {useState} from 'react'
import FuncMouseEffectH from './FuncMouseEffectH'


function MouseContainer() {
    const[display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <FuncMouseEffectH/>}
        </div>
    )
}

export default MouseContainer
