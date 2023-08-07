import React, { useContext } from 'react'
import { TodosContext } from '../context/TodoContext';

function CompleteAll(param) {

  const {todos ,  setTodos} = useContext(TodosContext);

  function completeAll () {

    const allTodos = todos.map(
      todo => {
        todo.jobStatus=true;
        return todo;
    }
    );

    setTodos(allTodos);

  }
  return (
    <button onClick={completeAll} className="button filter-button">Check All</button>
  )
}

export default CompleteAll
