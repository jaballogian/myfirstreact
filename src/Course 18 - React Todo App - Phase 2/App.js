import React from 'react'
import ToDoItem from './ToDoItem'
import './Style.css'

function App(){
    return(
        <div className="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default App