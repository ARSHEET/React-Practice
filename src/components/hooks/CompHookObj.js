import React, {useState} from 'react'

function CompHookObj() {

    const[name, setName] = useState({firstName:"", lastName:""})
    return (
        <div>
            <form>
            <input type="text" 
            value={name.firstName} 
            onChange={event => setName({...name, firstName: event.target.value})}
            />
            <input type="text" 
            value={name.lastName} 
            onChange={event=> setName({...name, lastName: event.target.value})}
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your first name is - {name.lastName}</h2>
            {/* <h2>{JSON.stringify(name)}</h2> */}
            </form>
            
        </div>
    )
}

export default CompHookObj

















// import React, {useState} from 'react'

// function CompH() {
//     const[name, setName] = useState({firstName:'', lastName:''})
//     return (
//         <div>
//             <form>
//                 <input type="text" 
//                 value={name.firstName} 
//                 onChange={e=> setName({...name, firstName: e.target.value})}
//                 />
//                 <br/>
//                 <input type="text" 
//                 value={name.lastName} 
//                 onChange={e=> setName({...name, lastName: e.target.value})}
//                 />
//                 <br/>

//                 <h2>Your first name is - {name.firstName}</h2>
//                 <h2>Your last name is - {name.lastName}</h2>
//                 <h2>{JSON.stringify(name)}</h2>
//             </form>
//         </div>
//     )
// }

// export default CompH

