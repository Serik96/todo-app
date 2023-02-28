import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosAction from './components/Todos/TodosAction';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplete: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteToHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isComplete: !todo.isComplete }
          : { ...todo };
      })
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };

  const completedTodoCount = todos.filter((todo) => todo.isComplete).length;

  return (
    <div className="App">
      <h1>Todo app</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosAction
          completedTodosExist={!!completedTodoCount}
          resetTodo={resetTodoHandler}
          deleteCompleteTodo={deleteCompletedTodoHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteToHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2>{`You have completed ${completedTodoCount} ${
          completedTodoCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}

export default App;
