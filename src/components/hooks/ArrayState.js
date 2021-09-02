import React, {useState} from 'react'


function ArrayState() {
   
    const [items, setItems] = useState([])
   
   
   
    const addItem = () =>{
        setItems([...items,{
            nums: items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    }
    
    return (
        <div>
            <button onClick={addItem}>Add an Item</button>
            <ul>

            { items.map(item => <li key={item.nums}>{item.value}</li>)}
                    
            </ul>
        </div>
    )
}

export default ArrayState
