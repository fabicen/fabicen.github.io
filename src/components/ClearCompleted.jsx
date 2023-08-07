import React, { useContext } from 'react'
import { TodosContext } from '../context/TodoContext';

function ClearCompleted() {

  const {todos,setTodos} = useContext(TodosContext);

  function clearCompleted (id) {

    setTodos([...todos].filter(todo => !todo.jobStatus));

  }

  return (
    <button onClick={clearCompleted} className="button">Clear completed</button>
  )
}

export default ClearCompleted
