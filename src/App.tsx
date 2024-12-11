import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import { useTodos } from "./hooks/useTodos";
import "./styles/App.css";

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteTodo, filter, setFilter } = useTodos();

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      <FilterBar filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default App;
