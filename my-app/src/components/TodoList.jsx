import TodoItemsCount from "./TodoItemsCount";
import ClearCompleted from './ClearCompleted';
import CompleteAll from './CompleteAll';
import TodoFilters from './TodoFilters';
import useToggle from "../hooks/useToggle";
import { useContext } from "react";
import { TodosContext } from "../context/TodoContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function TodoList() {

  const {todosWithFilter, setTodos, todos} = useContext(TodosContext);

  const [isVisibleOne, setIsVisibleOne] = useToggle();
  const [isVisibleTwo, setIsVisibleTwo] = useToggle();

  function deleteTodo (id) {
    // console.log("delete that id" +id)
    setTodos([...todos].filter(todo => todo.id !==id));
  }

   function editTodo (id) {

    const newTodoList = todos.map(todo => {
      if (todo.id === id){
        todo.isEditOn = true;
      }

      return todo;
    })

    setTodos(newTodoList);
  }

   function cancelEdit (id) {

    const newTodoList = todos.map(todo => {

      if (todo.id === id){

        todo.isEditOn = false;

      }

      return todo;

    })

    setTodos(newTodoList);
  }

  function isChecked (id) {

    const newTodoList = todos.map(todo => {

      if (todo.id === id){

        todo.jobStatus = !todo.jobStatus;

      }

      return todo;
    })

    setTodos(newTodoList);
  }


  function updateTodo (event,id) {

    console.log(event.target.value);
    const newTodoList = todos.map(todo => {

      if (todo.id === id){
        if (event.target.value.trim().length === 0){

          todo.isEditOn=false;

          return todo;
        }

        todo.title = event.target.value ;

        todo.isEditOn =false;

      }

      return todo;

    })

    setTodos(newTodoList);
  }


  return (

    <>
    <div>
    <TransitionGroup component="ul" className="todo-list">
    {
      todosWithFilter().map((todo, index)=> (
        <CSSTransition key={todo.id} timeout={300} classNames="slide-items">
      <li  key={todo.id}
      className="todo-item-container">
      <div className="todo-item">

        {/* CHECKBOX */}
        <input type="checkbox"
        onChange={() => isChecked(todo.id)}
        checked={todo.jobStatus ? true : false} />

        {/* FUNCTION FOR EDIT */}
        { !todo.isEditOn ? (
        <span onDoubleClick={() => editTodo(todo.id)}
        className={`todo-item-label ${todo.jobStatus ? 'line-through': ''}`}
        >
          {todo.title}
          </span>
        ):(
       <input
       type="text"
       onBlur={(event) => updateTodo(event,todo.id)}
       onKeyDown={event => {
          // KEYBINDS FOR EDIT
        if (event.key === "Enter"){

            updateTodo(event,todo.id);

        } else if (event.key === "Escape"){

            cancelEdit(todo.id);

        }
       }}

       className="todo-item-input"
       defaultValue={todo.title}
       autoFocus/>
        )}
      </div>
      <button onClick={()=>deleteTodo(todo.id)} className="x-button">
        <svg
          className="x-button-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </li>
    </CSSTransition>
     ))
    }
    </TransitionGroup>
    </div>

    <div>
    <button onClick={setIsVisibleOne} className="button"> Toggle Section</button>
    <button onClick={setIsVisibleTwo} className="button"> Toggle Section</button>
    </div>

    <CSSTransition
        in={isVisibleOne}
        timeout={300}
        classNames="slide-toggle"
        unmountOnExit
      >
        <div className="check-all-container">
          <CompleteAll />

          <TodoItemsCount />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isVisibleTwo}
        timeout={300}
        classNames="slide-toggle"
        unmountOnExit
      >
        <div className="other-buttons-container">
          <TodoFilters />
          <div>
            <ClearCompleted />
          </div>
        </div>
      </CSSTransition>
        </>
  )
}

export default TodoList
