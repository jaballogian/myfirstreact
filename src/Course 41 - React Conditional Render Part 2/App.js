import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadMessage: ["a", "b"]
        }
    }

    render() {
        const length = this.state.unreadMessage.length
        let number
        let addition = ""
        
        if(length === 0){
            number = "no"
        }
        else if(length === 1)
        {
            number = "an"
        }
        else{
            number = length
            addition = "s"
        }
        return(
            <h2>You have {number} unread message{addition}</h2>
        )
    }
}

export default App