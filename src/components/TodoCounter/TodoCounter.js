import './TodoCounter.css';

export const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="TodoCounter">
      Completed {completed} of {total} TODOs
    </h1>
  );
};
