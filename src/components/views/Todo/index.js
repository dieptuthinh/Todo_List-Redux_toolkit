import React from 'react';
import AddTodoForm from "../../Todos/AddTodoForm";
import TodoList from "../../Todos/TodoList";
import TotalCompleteItems from "../../Todos/TotalCompleteItems";
import './Todo.css'
Todo.propTypes = {
    
};

function Todo() {

    return (
      <div className="">
        <div className="container bg-white p-4 mt-5">
          <h1 classNam="text-center">My Todo List</h1>
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </div>
    );
}

export default Todo;