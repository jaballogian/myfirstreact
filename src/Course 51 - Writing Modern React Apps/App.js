import React from 'react'

class App extends React.Component{
    
    state = {
        firstName: "",
        lastName: ""
    }

    handleOnChange = (event) => {
        const {name, value} = event.target
        this.setState(() => {
            return{
                [name]: value
            }
        })
    }
    
    render(){
        return(
            <main>
                <form>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleOnChange}/>

                    <br/>
                    <input
                        type="type"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleOnChange}/>
                </form>
                <h1>Your name is: {this.state.firstName} {this.state.lastName}</h1>
            </main>
        )
    }
}

export default App