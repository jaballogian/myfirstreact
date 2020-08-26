import React, {Component} from 'react'

class App extends React.Component {
    render() {
        return(
            <div>
                <Header username="Jabal Logian" />
                <Greeting gender="male"/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

class Greeting extends Component {
    render() {
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

        let salutation
        if(this.props.gender === "male"){
            salutation = "sir"
        }
        else if(this.props.gender === "female"){
            salutation = "madam"
        }
        return(
            <h1>Good {timeOfDay} to you, {salutation}!</h1>
        )
    }
}

export default App