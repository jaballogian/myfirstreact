import React from 'react'
import randomColor from 'randomcolor'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment(){
        this.setState((previousState) => {
            return{
                count: previousState.count + 1
            }
        })
        console.log("Increment")
    }

    decrement(){
        this.setState((previousState) => {
            return{
                count: previousState.count - 1
            }
        })
        console.log("Decrement")
    }

    componentDidUpdate(previousProps, previousState){
        if(previousState.count !== this.state.count){
            const newColor = randomColor()
            this.setState(() => {
                return{
                    color: newColor
                }
            })
        }
    }
    
    render() {
        return(
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default App