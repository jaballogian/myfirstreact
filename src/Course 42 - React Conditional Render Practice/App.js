import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((previousState) => {
            return{
                isLoggedIn: !previousState.isLoggedIn
            }
        })
    }

    render() {
        let buttonDisplay = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let text = this.state.isLoggedIn ? "Logged In" : "Logged Out"

        return(
            <div>
                <button onClick={this.handleClick}>{buttonDisplay}</button>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default App