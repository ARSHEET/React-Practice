import React, {useReducer} from 'react'
import CompContextWithReducer1 from './components/hooks/CompContextWithReducer1'
import CompContextWithReducer2 from './components/hooks/CompContextWithReducer2'
import CompContextWithReducer3 from './components/hooks/CompContextWithReducer3'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App1 () {
    const[count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div className='App1'>
            Count - {count}
              <CompContextWithReducer1/>
              <CompContextWithReducer2/>
              <CompContextWithReducer3/>
        </div>
        </CountContext.Provider>
    )

}
export default App1