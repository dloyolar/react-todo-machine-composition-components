import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoCounter">
      Completed {completedTodos} of {totalTodos} TODOs
    </h1>
  );
};
