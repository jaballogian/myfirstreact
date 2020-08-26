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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
        this.setState((previousState) => {
            const updatedToDos = previousState.toDos.map((item) => {
                if(item.id === id){
                    return{
                        ...item,
                        completed: !item.completed
                    }
                }
                return item
            })
            return{
                toDos: updatedToDos
            }
        })
    }

    render(){
        
        const toDoItems = this.state.toDos.map((item) => {
            return(
                <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>
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