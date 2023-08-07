import React, { useContext } from 'react'
import { TodosContext } from '../context/TodoContext';

function TodoFilters() {


  const {condition, setCondition, todosWithFilter} = useContext(TodosContext);


  return (
    <div>
            <button onClick={() =>
              {
                setCondition("all")
                todosWithFilter()
              }}
              className={`button filter-button ${condition==="all"?"filter-button-active":""}`}>
              All
            </button>

            <button onClick={() =>
              {
                setCondition("active")
                todosWithFilter()
              }}
              className={`button filter-button ${condition ==="active" ? "filter-button-active" : ""}`}>Active</button>

            <button onClick={() =>
              {
                setCondition("completed")
                todosWithFilter()
              }}
              className={`button filter-button ${condition ==="completed" ? "filter-button-active" : ""} `}>Completed</button>

          </div>
  )
}

export default TodoFilters
