import React from 'react'
import FormComponent from './FormComponent'

class FormContainer extends React.Component{
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
            <FormComponent 
                handleOnChange={this.handleOnChange}
                data={this.state}/>
        )
    }
}

export default FormContainer