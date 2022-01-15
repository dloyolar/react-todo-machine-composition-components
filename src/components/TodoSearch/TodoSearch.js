import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {
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
