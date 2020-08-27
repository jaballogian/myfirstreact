import React from 'react'
import Conditional from './Conditional'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            console.log("1500 ms is reached")
            return(
                this.setState(() => {
                    return{
                        isLoading: false
                    }
                })
            )
        }, 1500)
    }

    render(){
        // method 1 and 2
        // return(
        //     <div>
        //         <Conditional isLoading={this.state.isLoading}/>
        //     </div>
        // )

        // method 3 - using turnary operator in JSX
        return(
            <div>
                {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />}
            </div>
        )
    }
}

export default App