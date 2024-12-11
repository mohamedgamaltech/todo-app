import { useState, useEffect } from "react";
import axios from "axios";
import { Todo } from "../types/Todo";
import { getTodosFromLocalStorage, saveTodosToLocalStorage } from "../utils/localStorageHelper";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const localTodos = getTodosFromLocalStorage();
        console.log({localTodos})
        if (localTodos.length > 0) {
          setTodos(localTodos);
        } else {
          const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20");
          setTodos(response.data);
        }
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      saveTodosToLocalStorage(todos);
    }
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return { todos: filteredTodos, addTodo, toggleTodo, deleteTodo, filter, setFilter };
};
