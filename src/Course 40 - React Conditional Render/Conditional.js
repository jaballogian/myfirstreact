import React from 'react'

function Conditional(props){

    // method 1
    // if(props.isLoading === true){
    //     return(
    //         <h1>Loading...</h1>
    //     )
    // }
    // return(
    //     <h1>Some cool stuff about conditional rendering</h1>
    // )

    // method 2 - using turnary operator
    return(
        <div>
            {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool stuff about conditional rendering</h1>}
        </div>
    )
}

export default Conditional