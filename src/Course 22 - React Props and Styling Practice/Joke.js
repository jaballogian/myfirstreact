import React from 'react'

function Joke(props){
    return(
        <div>
            {/* first way: using turnary operator*/}
            {/* formula: if condition ? true statement : false statement */}
            {/* <h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3> */}
            {/* <h3 style={{color: props.question ? "#000000" : "#888888"}}>Answer: {props.punchLine}</h3> */}
            
            {/* second way: using double ampersands operator */}
            {/* formula: if condition && true statement */}
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.punchLine}</h3>
            <hr></hr>
        </div>
    )
}

export default Joke