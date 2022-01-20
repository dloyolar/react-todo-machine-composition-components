import { withStorageListener } from './withStorageListener';

import './ChangeAlert.css';

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div className="ChangeAlert-container">
        <p>There were changes⚠️⚠️⚠️</p>
        <button className="ChangeAlert--button" onClick={() => toggleShow()}>
          Update
        </button>
      </div>
    );
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
