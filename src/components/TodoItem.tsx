import { Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="todo-item">
        <div className={`todo-title ${todo.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
           />
           <span>{todo.title}</span>
      </div>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
