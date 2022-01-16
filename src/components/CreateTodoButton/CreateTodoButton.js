import './CreateTodoButton.css';

export const CreateTodoButton = ({ setOpenModal }) => {
  const handleClick = () => {
    setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
};
