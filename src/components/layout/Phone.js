import React, { Fragment } from 'react';
import PhoneScreen from './PhoneScreen';
import './devices.css';
const Phone = () => {
  return (
    <Fragment>
      <div className="device device-google-pixel device-black">
        <div className="device-frame">
          <div className="device-content">
            <PhoneScreen />
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </Fragment>
  );
};

export default Phone;
