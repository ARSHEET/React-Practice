import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }

        case 'ERROR':
            return {
                loading: false,
                error: 'Something Went Wrong',
                post: {}
            } 
            default:
                return state
    }
}

function ReducerHookFetch2() {
   const [state, dispatch] = useReducer(reducer, initialState)


   useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')  
    .then(Response =>{
        dispatch({type: 'SUCCESS', payload: Response.data})
    })
    .catch(error =>{
        dispatch({type: 'ERROR'})
    })
}, [])

    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default ReducerHookFetch2
