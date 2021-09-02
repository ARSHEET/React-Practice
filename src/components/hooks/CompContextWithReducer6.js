import React, {useContext} from 'react'
import { CountContext } from '../../App1'


function CompContextWithReducer6() {
    const countContext = useContext(CountContext)
    return (
        <div>Component 6 - {countContext.countState}
             <button onClick={()=> countContext.countDispatch('reset')}>Reset</button><br/>
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button><br/>
            <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            
        </div>
    )
}

export default CompContextWithReducer6
