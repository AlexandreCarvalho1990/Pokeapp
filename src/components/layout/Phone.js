import React, { Fragment } from 'react';
import Device from 'react-device-frame';
import { Container } from 'react-bootstrap';
const Phone = () => {
  return (
    <Fragment>
      <Device
        name="galaxy-s5"
        color="black"
        url="https://www.google.com"
        size="small"
      />
    </Fragment>
  );
};

export default Phone;
