import React, {useState, useEffect} from 'react'
import randomColor from 'randomcolor'

function App(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    useEffect(() => {
        console.log(count)
        const intervalID = setInterval(() => {
            return(
                setCount((previousState) => {
                    return(
                        previousState = previousState + 1
                    )
                })
            )
        }, 1000)
        return(() => {
            return(
                clearInterval(intervalID)
            )
        })
    })

    useEffect(() => {
        return(
            setColor(randomColor())
        )
    }, [count])

    return(
        <h1 style={{color: color}}>{count}</h1>
    )
}

export default App