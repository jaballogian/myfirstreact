import React from 'react'

function FormComponent(props){
    return(
        <main>
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={props.data.firstName}
                    onChange={props.handleOnChange}/>
                
                <br/>
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={props.data.lastName}
                    onChange={props.handleOnChange}/>
                
                <br/>
                <input
                    type="text"
                    placeholder="Age"
                    name="age"
                    value={props.data.age}
                    onChange={props.handleOnChange}/>
                <br/>

                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleOnChange}
                    /> Male
                </label>

                <br/>
                <label>
                    <input
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleOnChange}
                    /> Female
                </label>

                <br/>
                <select 
                    name="destination"
                    value={props.data.destination}
                    onChange={props.handleOnChange}
                >
                    <option value="Indonesia">Indonesia</option>
                    <option value="Belgium">Belgium</option>
                    <option value="United datas">United datas</option>
                    <option value="Netherland">Netherland</option>
                    <option value="Singapore">Singapore</option>
                </select>

                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleOnChange}
                    /> Is Vegan?
                </label>

                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleOnChange}
                    /> Is Kosher?
                </label>

                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleOnChange}
                    /> Lactose Free?
                </label>
                
                <br/>
                <button>Submit</button>
            </form>

            <hr/>
            <h2>Entered Information</h2>
            <p>Your name: {props.data.firstName} {props.data.lastName}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.destination}</p>
            <p>Your dietary restriction:</p>
            <p>Vegan: {props.data.isVegan ? "yes" : "no"}</p>
            <p>Kosher: {props.data.isKosher ? "yes" : "no"}</p>
            <p>Lactose Free: {props.data.isLactoseFree ? "yes" : "no"}</p>
        </main>
    )
}

export default FormComponent