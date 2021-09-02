import React, {useState, useEffect} from 'react'

function EffectHook1() {

    const[count, setCount] = useState(0)

    const[name, setName] = useState('')

    useEffect(()=>{
        console.log('useEffect- Updating title on every rendering')
        document.title = `You Clicked ${count} times`
    },[count, name])
    return (
        <div>
            <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default EffectHook1
