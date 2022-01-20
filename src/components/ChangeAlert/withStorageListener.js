import { useEffect, useState } from 'react';

export const withStorageListener = (WrappedComponent) => {
  return function WrapperComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onChange = (change) => {
        if (change.key === 'TODOS_V1') {
          console.log('Hubo cambios!');
          setStorageChange(true);
        }
      };

      window.addEventListener('storage', onChange);

      return () => window.removeEventListener('storage', onChange);
    }, []);

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storageChange} toggleShow={toggleShow} />;
  };
};
