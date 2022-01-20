import { useStorageListener } from './useStorageListener';

import './ChangeAlert.css';

export const ChangeAlert = ({ sincronize }) => {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className="ChangeAlert-container">
        <div className="ChangeAlert-container--box">
          <p className="ChangeAlert-container--text">
            There were changes⚠️⚠️⚠️
          </p>
          <button className="ChangeAlert--button" onClick={() => toggleShow()}>
            Update
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
