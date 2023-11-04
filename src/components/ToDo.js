import React from 'react'

export default function ToDo({ todo , todos , setTodos }) {

    const handlerDelete = ()=>{
        setTodos(todos.filter((el)=>el.id !== todo.id))
    }

    const handlerCompleted = () => {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return {...item, completed: !item.completed}
            }
            return item
        }))
    }

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button onClick={handlerCompleted} className='complete-btn'><i className="fa-solid fa-check"></i></button>
            <button onClick={handlerDelete} className={`trash-btn`}><i className="fa-solid fa-trash"></i></button>
        </div>
    )
}