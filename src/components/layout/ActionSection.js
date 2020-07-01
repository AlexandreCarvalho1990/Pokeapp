import React, { Fragment, useState } from 'react';
import { FaDownload, FaDiscord, FaHeart } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-c137';
import { ModalHeroSection } from '../FakeDatabase/Fakedatabase';
import ModalElement from './Modal';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
  const [show, setShow] = useState(false);
  const [numberSection, setNumberSection] = useState(0);
  const handleClose = () => setShow(false);
  const handleClick = (teste) => {
    setNumberSection(Number(teste));
    setShow(true);
  };
  return (
    <Fragment>
      <ModalElement
        show={show}
        handleClose={handleClose}
        item={ModalHeroSection[numberSection]}
      />
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-auto py-1">
          <AwesomeButton
            onPress={() => handleClick(0)}
            type="primary"
            size="medium"
          >
            <FaDownload /> Install Now
          </AwesomeButton>{' '}
        </div>
        <div className="col-auto py-1">
          <AnchorLink href="#memberSection">
            <AwesomeButton type="link" size="medium">
              <FaHeart /> Support Us
            </AwesomeButton>{' '}
          </AnchorLink>
        </div>
        <div className="col-auto py-1">
          <AwesomeButton
            href="https://discord.com/invite/hW4djSw"
            className="text-decoration-none"
            type="primary"
            size="medium"
            className="text-decoration-none"
          >
            <FaDiscord /> Join Us
          </AwesomeButton>{' '}
        </div>
      </div>
    </Fragment>
  );
};

export default ActionSection;
