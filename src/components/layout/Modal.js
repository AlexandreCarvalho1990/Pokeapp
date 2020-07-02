import React, { Fragment } from 'react';
import { Modal, Container } from 'react-bootstrap';
import { AwesomeButton } from 'react-awesome-button';
import DownloadButton from './DownloadButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaHeart } from 'react-icons/fa';
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

const ModalElement = ({ show, handleClose, item }) => {
  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="d-flex text-center justify-content-center"
      >
        <Modal.Body>
          {item.type === 'download' ? (
            <Fragment>
              <h1 className="p-2">{item.title}</h1>
              <hr />
              <div className="text-justify">
                <p className="p-2">{item.text}</p>
                <p className="p-2">{item.secondtext}</p>
              </div>
              <Container>
                <AnchorLink
                  href="#memberSection"
                  className="text-decoration-none"
                >
                  <AwesomeButton onPress={handleClose} type="link" size="large">
                    <FaHeart /> Support Us
                  </AwesomeButton>{' '}
                </AnchorLink>
                <DownloadButton />{' '}
              </Container>
            </Fragment>
          ) : null}
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default ModalElement;
