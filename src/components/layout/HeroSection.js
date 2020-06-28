import React, { Fragment } from 'react';
import Phone from './Phone';
import { Col } from 'react-bootstrap';
import ActionSection from './ActionSection';
const HeroSection = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
    .container {
      padding-top: 100px;

    }
    .h1 strong{
      color: black;
    }
    `}
      </style>
      <div className="shadow-md container px-4">
        <div className="row align-items-center justify-content-center py-4 px-2">
          <div className="col-lg-6 p-4">
            {' '}
            <h1 className="features-text display-4">
              <strong>Pokemod </strong>
              is all about <ins>efficiency.</ins>
            </h1>
            <h2 className="lead mt-4 pb-3 font-italic">
              Improve your experience when playing Pokémon Go. Enjoy an unique,
              richer and more enjoyable game with Pokemod.
            </h2>
            <ActionSection />
          </div>
          <div className="d-flex align-items-center justify-content-center col-auto py-4">
            {' '}
            <Phone />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroSection;
