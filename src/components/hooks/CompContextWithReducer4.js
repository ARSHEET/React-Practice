import React, {useContext} from 'react'
import { CountContext } from '../../App1'


function CompContextWithReducer4() {
    const countContext = useContext(CountContext)
    return (
        <div>Component 4 -{countContext.countState}
             <button onClick={()=> countContext.countDispatch('reset')}>Reset</button><br/>
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button><br/>
            <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            
        </div>
    )
}

export default CompContextWithReducer4
