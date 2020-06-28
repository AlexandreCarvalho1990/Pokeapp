import React, { Fragment } from 'react';
import { FaDownload, FaDiscord, FaHeart } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-c137';
/* Create unique styles inside Fragment component 
      <style type="text/css">
        {`
    .container {
        background-color: #f5f5f5;
        margem:auto;
    }
    `}
      </style>
*/
const ActionSection = () => {
  console.log(styles);
  return (
    <Fragment>
      <div className="row align-items-center justify-content-center text-center">
        <div className="col py-2">
          <AwesomeButton type="primary" size="medium">
            <FaDownload /> Install Now
          </AwesomeButton>{' '}
        </div>
        <div className="col py-2">
          <AwesomeButton type="link" size="medium">
            <FaHeart /> Support Us
          </AwesomeButton>{' '}
        </div>
        <div className="col py-2">
          <AwesomeButton type="primary" size="medium">
            <FaDiscord /> Join Us
          </AwesomeButton>{' '}
        </div>
      </div>
    </Fragment>
  );
};

export default ActionSection;
