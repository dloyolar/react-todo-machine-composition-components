import { withStorageListener } from './withStorageListener';

import './ChangeAlert.css';

const ChangeAlert = ({ show, toggleShow }) => {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
