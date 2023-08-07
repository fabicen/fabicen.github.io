import React, { useContext, useMemo } from 'react'
import { TodosContext } from '../context/TodoContext';



function TodoItesmCount() {

  const {todos} = useContext(TodosContext)

  function remainingCalc () {

    return todos.filter(todo => !todo.jobStatus).length;

  }


  const remaining = useMemo(remainingCalc,[todos]);

  return (
       <p>{remaining} items remaining</p>
  )
}

export default TodoItesmCount
