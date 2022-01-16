import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

export const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search TODOS"
      className="TodoSearch"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
