import { useContext } from 'react';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';

export const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Error</p>}
        {loading && <p>Loading...</p>}
        {!loading && !searchedTodos.length && <p>Create your first TODO 👌</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            text={todo.text}
            key={todo.id}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </TodoList>
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
};
