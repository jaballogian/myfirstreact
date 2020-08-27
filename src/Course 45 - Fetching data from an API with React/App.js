import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            character: "",
            loading: true
        }
    }

    componentDidMount(){
        fetch("https://swapi.dev/api/people/4/")
        .then((response) => {
            return(
                response.json()
            )
        })
        .then((data) => {
            return(
                console.log(data),
                this.setState(() => {
                    return{
                        character: data,
                        loading: false
                    }
                })
            )
        })
    }

    render(){
        console.log("Character name is", this.state.character.name)
        const text = this.state.loading ? "Loading..." : `The character is ${this.state.character.name}`
        return(
            <div>
                <h1>{text}</h1>
            </div>
        )
    }
}

export default App