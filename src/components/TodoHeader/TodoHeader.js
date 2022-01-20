import { Children, cloneElement } from 'react';
import './TodoHeader.css';

export const TodoHeader = ({ children, loading }) => {
  return (
    <header className="TodoHeader">
      {Children.toArray(children).map((child) =>
        cloneElement(child, { loading })
      )}
    </header>
  );
};
