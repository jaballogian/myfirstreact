import React from 'react'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "Jabal Logian",
            age: 23
        }
    }
    
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}!</h1>
                <h3>I'm {this.state.age} years old</h3>
            </div>
        )
    }
}

export default App