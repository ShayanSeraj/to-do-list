import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({todos , setTodos , filteredTodos}) {
  return (
    <div className='todo-container'>
        <ul className='todo-list'>
            {filteredTodos?.map(todo=>(
                <ToDo key={todo.id} todo={todo} 
                todos={todos} setTodos={setTodos}/>
            ))}
        </ul>
    </div>
  )
}
