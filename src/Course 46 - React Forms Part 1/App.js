import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event){
        const {name, value} = event.target
        this.setState(() => {
            return{
                [name]: value
            }
        })
    }

    render(){
        return(
            <form>
                <input
                    type="text"
                    value={this.state.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleOnChange}
                />
                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleOnChange}
                />
                <h1>Your first name is : {this.state.firstName}</h1>
                <h1>Your last name is : {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App