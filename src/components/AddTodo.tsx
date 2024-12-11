import { useState } from "react";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (title.trim() === "") {
      alert("Title is required!");
      return;
    }
    onAdd(title);
    setTitle("");
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
