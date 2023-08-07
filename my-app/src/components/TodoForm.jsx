import React,{ useContext, useState} from 'react';
import { TodosContext } from '../context/TodoContext';

function TodoForm() {

  const [todoInput , setTodoInput] = useState("");

  function handleInput (event) {

    setTodoInput(event.target.value);

  }

  function addTodo (event) {

    event.preventDefault();

    if(todoInput.trim().length === 0){
      return;
    }

    setTodos([...todos, {

      id: idForTodo,

      title: todoInput,

      jobStatus: false

    }, ]);

  setTodoInput("");

  setIdForTodo(previdForTodo => previdForTodo+1);


  }
const {idForTodo, todos, setTodos, setIdForTodo} = useContext(TodosContext);
  return (
    <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>
  )
}


export default TodoForm
