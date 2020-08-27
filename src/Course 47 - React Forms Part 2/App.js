import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: false,
            gender: "",
            favoriteColor: "white"
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"
            ? this.setState(() => {
                return{
                    [name]: checked
                }
            })
            : this.setState(() => {
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
                
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleOnChange}
                />
                
                <br />
                <textarea value="Some default value"/>
                
                <br />
                <label>
                    <input 
                        type="checkbox"
                        name="isFriendly"
                        checked={this.state.isFriendly}
                        onChange={this.handleOnChange}
                    /> Is friendly? 
                </label>
                
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleOnChange}
                    /> Male
                </label>
                
                <br />
                <label>
                    <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleOnChange}
                    /> Female
                </label>
                
                <br />
                <label>Favorite color: </label>
                <select
                    name="favoriteColor"
                    value={this.state.favoriteColor}
                    onChange={this.handleOnChange}    
                >
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                </select>
                <h1>Your first name is : {this.state.firstName}</h1>
                <h1>Your last name is : {this.state.lastName}</h1>
                <h2>You are {this.state.isFriendly ? "a friendly" : "an unfriendly"} person</h2>
                <h2>You are a {this.state.gender}</h2>
                <h2>Your favorite color is {this.state.favoriteColor}</h2>
            </form>
        )
    }
}

export default App