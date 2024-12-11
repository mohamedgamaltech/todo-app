const LOCAL_STORAGE_KEY = "todo_list";

export const saveTodosToLocalStorage = (todos: any) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

export const getTodosFromLocalStorage = (): any[] => {
  const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
};
