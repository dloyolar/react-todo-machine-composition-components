import './TodoCounter.css';

export const TodoCounter = ({ completedTodos, totalTodos, loading }) => {
  return (
    <h1 className={`TodoCounter ${loading && 'TodoCounter--loading'}`}>
      Completed {completedTodos} of {totalTodos} TODOs
    </h1>
  );
};
