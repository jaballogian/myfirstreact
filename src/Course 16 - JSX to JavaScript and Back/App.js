import React from 'react'

function App(){

    const firstName = "Jabal"
    const lastName = "Logian"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){
        timeOfDay = "morning"
    }
    else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }
    else{
        timeOfDay = "night"
    }

    return(
        <div>
            <h1>Hello {firstName + " " + lastName}!</h1>
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            <h1>Good {timeOfDay}!</h1>
        </div>
    )
}

export default App