import React, {useState} from 'react'

function App(){

    // first way to use useState
    // const answer = useState("Yes")

    // second way to use useState
    const [answer] = useState("Yes")

    console.log(answer)
    return(
        <div>
            {/* first way to use useState */}
            {/* <h1>Is state important to know? {answer[0]}</h1> */}

            {/* second way to use useState */}
            <h1>Is state important to know? {answer}</h1>
        </div>
    )
}

export default App