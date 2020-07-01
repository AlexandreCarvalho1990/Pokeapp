import React, { Fragment } from 'react';
import Phone from './Phone';
import ActionSection from './ActionSection';
/* Old Hero Section 

<h1 className="features-text display-4">
              <strong>Pokemod </strong>
              is all about <ins>efficiency.</ins>
            </h1>


                  <div className="shadow-md container px-4">
        <div className="d-flex align-content-center">
          <img
            src={PokemodHeroSection}
            alt="PokemodHeroSection"
            style={{ maxWidth: '600px' }}
            width="100%"
            height="100%"
          />
        </div>
        <div className="row align-items-center justify-content-center py-4 px-2">
          <div className="col-lg-6 p-4">
            <h2 className="lead mt-4 pb-3 font-italic">
              Improve your experience when playing Pokémon Go. Enjoy an unique,
              richer and more enjoyable game with Pokemod.
            </h2>
            <ActionSection className="container" />
          </div>
          <div className="d-flex align-items-center justify-content-center col-auto py-4">
            {' '}
            <Phone />
          </div>
        </div>
      </div>
*/
const HeroSection = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
        .container {
          padding-top: 100px;
        }
        `}
      </style>
      <div className="shadow-md container px-4">
        <div className="row align-items-center justify-content-center py-4 px-2">
          <div className="col-lg-6 p-4">
            <h1 className="features-text display-4">
              <strong>Pokemod </strong>
              is all about <ins>efficiency.</ins>
            </h1>

            <h2 className="lead mt-4 pb-3 font-italic">
              Improve your experience when playing Pokémon Go. Enjoy an unique,
              richer and more enjoyable game with Pokemod.
            </h2>
            <ActionSection className="container" />
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
