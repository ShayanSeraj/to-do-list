
import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')))
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])
  const [errorText, setErrorText] = useState('')

  useEffect(()=>{
    getLocalTodos()
  },[])

  useEffect(() => {

    filterHandler()
    saveLocalTodos()

  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        return setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        return setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        return setFilteredTodos(todos);
        break;
    }
  }
  
  const saveLocalTodos = ()=>{
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = ()=>{
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div>
      <header>
        <h1>To Do List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText}
        todos={todos} setTodos={setTodos} setStatus={setStatus} 
        setErrorText={setErrorText} />
        {errorText && <p className="error">{errorText}</p>}
      <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
