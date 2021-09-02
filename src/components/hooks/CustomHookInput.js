import React from 'react'
import useInput from '../custom Hooks/useInput'

function CustomHookInput() {
    
   

    const [firstname, bindFirstname, resetFirstname] = useInput('')
    const [lastname, bindLastname, resetLastname] = useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetFirstname()
        resetLastname()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label><b>First Name : </b></label>
                    <input {...bindFirstname} type="text"/>
                </div>
                <div>
                    <label><b>Last Name : </b></label>
                    <input {...bindLastname} type="text"/>
                </div>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default CustomHookInput
