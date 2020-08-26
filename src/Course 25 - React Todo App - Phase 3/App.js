import React from 'react'
import ToDoItem from './ToDoItem'
import './Style.css'
import toDosData from './toDosData'

function App(){

    const toDoItems = toDosData.map((item) => {
        return(
            <ToDoItem key={item.id} item={item}/>
        )
    })
    return(
        <div className="todo-list">
            {toDoItems}
        </div>
    )
}

export default App