import React, {useState, useEffect} from 'react'
import randomColor from 'randomcolor'

function App(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function increment(){
        setCount((previousCount) => {
            return(
                previousCount = previousCount + 1
            )
        })
    }

    function decrement(){
        setCount((previousCount) => {
            return(
                previousCount = previousCount - 1
            )
        })
    }

    useEffect(() => {
        return(
            setColor(randomColor())
        )
    }, [count])
    
    return(
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App