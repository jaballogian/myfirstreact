import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    
    render() {
        let display
        if(this.state.isLoggedIn){
            display = "in"
        }
        else{
            display = "out"
        }
        return(
            <h1>You're currently logged {display}</h1>
        )
    }
}

export default App