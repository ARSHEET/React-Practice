import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const[pics, setPics] = useState({})
    const[id, setId] = useState(1)
    const[idFromButtonClick, setidFromButtonClick] = useState(1)

    const handleClick = () =>{
        setidFromButtonClick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res =>{
            console.log(res)
            setPics(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [idFromButtonClick])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch the Post</button>
            <div>{pics.title}</div>
            {/* <ol>
                {
                pics.map(pic => <li key={pic.id}>{pic.title}</li>)
                }
            </ol> */}
        </div>
    )
}

export default DataFetching
