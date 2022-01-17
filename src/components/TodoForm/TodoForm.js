import { useContext, useState } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

export const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState('');
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onWrite = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!newTodoValue) return;
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>What is your new TODO?</label>
      <textarea
        placeholder="Learn react..."
        value={newTodoValue}
        onChange={onWrite}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="TodoForm-button TodoForm-button--add"
        >
          Add
        </button>
      </div>
    </form>
  );
};
