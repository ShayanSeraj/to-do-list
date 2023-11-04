import React, { useState } from 'react'

export default function Form({ inputText, todos, setInputText, setTodos, setStatus ,setErrorText }) {



    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputText){
            setTodos([...todos, { text: inputText, completed: false, id: Date.now() }])
            setInputText('')
            setErrorText('')
        }else{
            setErrorText('Please enter a task...')
        }
    }

    const statusHandler = (e)=>{
        setStatus(e.target.value)
    }

    return (
        <form>
            <input type="text" className='todo-input'
                value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button onClick={handleSubmit} className="todo-button" type='submit'><i className="fa-solid fa-square-plus"></i></button>
            <div onChange={statusHandler} className="select">
                <select className='filter-todo' name="todos">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
