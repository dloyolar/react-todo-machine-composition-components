import './TodoCounter.css';

export const TodoCounter = ({ completedTodos, totalTodos }) => {
  return (
    <h1 className="TodoCounter">
      Completed {completedTodos} of {totalTodos} TODOs
    </h1>
  );
};
