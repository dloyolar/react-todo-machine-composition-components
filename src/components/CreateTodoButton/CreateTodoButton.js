import './CreateTodoButton.css';

export const CreateTodoButton = () => {
  const handleClick = (msg) => {
    alert(msg);
  };
  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
};
