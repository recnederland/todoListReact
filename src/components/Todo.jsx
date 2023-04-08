import React from 'react'
// mport TodoList from './TodoList';

function Todo({text, todos, setTodos, todo}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        console.log(todo);
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id){
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }))}
  return (
    <div>
       <div className={`todo ${todo.completed ? "completed" : ""}`}>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check-circle"></i>
            </button>
            <li className="todo-item">{text}</li>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fa fa-minus-circle"></i>
            </button>
        </div>
    </div>
  )
}

export default Todo
