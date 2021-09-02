import React, {useState, useMemo} from 'react'

function UseMemoHook() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const increment1 = ()=>{
        setCount1(count1 + 1)
    }

    const increment2 = ()=>{
        setCount2(count2 + 1)
    }

    

    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return count1 % 2 === 0
    }, [count1])



    return (
        <div>
            <div>
            <button onClick={increment1}>Counter 1 - {count1}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
            <button onClick={increment2}>Counter 2 - {count2}</button>
            </div>
        </div>
    )
}

export default UseMemoHook
