import React, {useEffect, useRef} from 'react';                    //useRef focuses on the input where we want it to be focused.

function UseRefHook1() {

    const inputRef = useRef(null)
    useEffect(()=>{
        //focus the input element
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type="text"/>
        </div>
    )
}

export default UseRefHook1
