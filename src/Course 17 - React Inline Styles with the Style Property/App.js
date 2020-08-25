import React from 'react'

function App(){

    const firstName = "Jabal"
    const lastName = "Logian"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const helloStyle = {
        color: "#FFFFFF",
        backgroundColor: "#FF2D00",
        fontSize: "30px"
    }

    const timeStyle = {
        fontSize: "20px"
    }

    if(hours < 12){
        timeOfDay = "morning"
        timeStyle.color = "#04756F"
    }
    else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
        timeStyle.color = "#2E0927"
    }
    else{
        timeOfDay = "night"
        timeStyle.color = "#D90000"
    }

    return(
        <div>
            <h1 style={helloStyle}>Hello {firstName + " " + lastName}!</h1>
            <h1 style={helloStyle}>Hello {`${firstName} ${lastName}`}!</h1>
            <h1 style={timeStyle}>Good {timeOfDay}!</h1>
        </div>
    )
}

export default App