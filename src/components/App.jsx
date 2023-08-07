// import React, { Component } from 'react';
import {useEffect, useRef, useState} from 'react';
import NothingTodo from './NothingTodo';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../reset.css';
import '../App.css';
import useLocalStorage from "../hooks/useLocalStorage";
import { TodosContext } from '../context/TodoContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


function App() {

  const [todos, setTodos] = useLocalStorage("todos",[]);

  const [idForTodo , setIdForTodo] = useLocalStorage("idForTodo",0);

  const [name, setName] = useLocalStorage("name", "");

  const [condition , setCondition] = useState("all");

  const nameInputEl = useRef(null);




  // const [todos, setTodos] = useState([
  //   {
  //     id:1,
  //   title:"Cooking.",
  //   jobStatus:false,
  //   isEditOn:false
  // },
  //   {
  //     id:2,
  //   title:"Feed the cat.",
  //   jobStatus:false,
  //   isEditOn:false
  // },
  //   {
  //     id:3,
  //   title:"Take over the world.",
  //   jobStatus:true,
  //   isEditOn:false
  // }
  // ]);


//   function addTodo (param) {

//     setTodos([...todos, {

//       id: idForTodo,

//       title: param,

//       jobStatus: false

//     },
//   ]);

//   setIdForTodo(previdForTodo => previdForTodo+1);
//  }

function todosWithFilter () {

  if (condition === "all"){
    return todos;
  }

  if (condition === "active"){
    return todos.filter(todo => !todo.jobStatus);
  }

  if (condition === "completed"){
    return todos.filter(todo => todo.jobStatus);
  }

}


function handleNameInput (event) {

  setName(event.target.value);
  // localStorage.setItem("name",JSON.stringify(event.target.value));

}
// const [name, setName] = useState();


useEffect(() =>{
  nameInputEl.current.focus();

  // setName(JSON.parse(localStorage.getItem("name")?? ""));

}, []);


  return (
    <TodosContext.Provider value={{ idForTodo, todos, setTodos, setIdForTodo, condition, setCondition, todosWithFilter}}>
      <div className="todo-app">
        <div className='todo-name-container'>
          <h2>
              Give us some info...
          </h2>
          <form action="#"  >
            <input
            type="text"
            ref={nameInputEl}
            className='todo-input'
            onChange={handleNameInput}
            placeholder='Your name!'/>
          </form>

          {/* {name && <p className='name-container'>Hello {name}</p> } */}
          <CSSTransition
              in={name.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
              <p className="name-container">Hello, {name}</p>
            </CSSTransition>
        </div>
        <h2>Todo App</h2>
        <TodoForm />
              {/*CONTROL IF THERE IS A TODO  */}
              <SwitchTransition mode='out-in' >
                <CSSTransition key={todos.length===0} timeout={300} classNames="slide-toggle" unmountOnExit >
                  {todos.length === 0 ? <NothingTodo/> : <TodoList/>}
                </CSSTransition>
              </SwitchTransition>
        {/* <CSSTransition
              in={todos.length > 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
          <TodoList/>
          </CSSTransition>

          <CSSTransition
              in={name.length === 0}
              timeout={300}
              classNames="slide-vertical"
              unmountOnExit
            >
          <NothingTodo/>
        </CSSTransition> */}
      </div>
    </TodosContext.Provider>
  );
}

export default App;
