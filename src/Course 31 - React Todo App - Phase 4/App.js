import React from 'react'
import ToDoItem from './ToDoItem'
import './Style.css'
import toDosData from './toDosData'

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            toDos: toDosData
        }
    }

    render(){
        
        const toDoItems = this.state.toDos.map((item) => {
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
}

export default App