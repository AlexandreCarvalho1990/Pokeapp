import React, { Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';

/* Old modal version 
    <Fragment>
      {item.key ? (
        <Fragment>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                <h5>{item.name}</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {item.tester ? (
                <Fragment>
                  <p>{item.text}</p>{' '}
                  <p>
                    <em>
                      This module is in testing stage, available for{' '}
                      <a href="https://patreon.com/pokemod">beta testers</a>{' '}
                      only for the time being.
                    </em>
                  </p>
                </Fragment>
              ) : (
                <p>{item.text}</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      ) : (
        <Fragment>
          {' '}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                <h5>{item.name}</h5>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {item.tester ? (
                <Fragment>
                  <p>{item.text}</p>{' '}
                  <p>
                    <em>
                      This module is in testing stage, available for{' '}
                      <a href="https://patreon.com/pokemod">beta testers</a>{' '}
                      only for the time being.
                    </em>
                  </p>
                </Fragment>
              ) : (
                <p>{item.text}</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Fragment>
      )}
    </Fragment>
*/

const Modal = ({ show, handleClose, item }) => {
  return (
    <Fragment>
      {' '}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Modal;
