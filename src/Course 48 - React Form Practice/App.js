import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "male",
            destination: "Indonesia",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox"
        ? this.setState((previousState) => {
            return{
                ...previousState,
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
            <main>
                <form>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleOnChange}/>
                    
                    <br/>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleOnChange}/>
                    
                    <br/>
                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleOnChange}/>
                    <br/>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleOnChange}
                        /> Male
                    </label>

                    <br/>
                    <label>
                        <input
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleOnChange}
                        /> Female
                    </label>

                    <br/>
                    <select 
                        name="destination"
                        value={this.state.destination}
                        onChange={this.handleOnChange}
                    >
                        <option value="Indonesia">Indonesia</option>
                        <option value="Belgium">Belgium</option>
                        <option value="United States">United States</option>
                        <option value="Netherland">Netherland</option>
                        <option value="Singapore">Singapore</option>
                    </select>

                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            checked={this.state.isVegan}
                            onChange={this.handleOnChange}
                        /> Is Vegan?
                    </label>

                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleOnChange}
                        /> Is Kosher?
                    </label>

                    <br/>
                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleOnChange}
                        /> Lactose Free?
                    </label>
                    
                    <br/>
                    <button>Submit</button>
                </form>

                <hr/>
                <h2>Entered Information</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restriction:</p>
                <p>Vegan: {this.state.isVegan ? "yes" : "no"}</p>
                <p>Kosher: {this.state.isKosher ? "yes" : "no"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "yes" : "no"}</p>
            </main>
        )
    }
}

export default App