import React, { Fragment } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
const HeroSection = () => {
  return (
    <Fragment>
      <Container fluid className="m-0 p-5">
        <h2 className="display-6 my-4 catchy-phrase"></h2>
        <div className="row align-items-center justify-content-center py-4 px-2">
          <div className="col-lg-6 p-4">
            <h1 className="display-4">
              <strong>Pokemod</strong>
              is all about
              <ins>efficiency.</ins>
            </h1>
            <h2 className="lead mt-4 pb-3 font-italic">
              Improve your experience when playing Pokémon Go. Enjoy an unique,
              richer and more enjoyable game with Pokemod.
            </h2>
            <div className="row align-items-center justify-content-center text-center">
              <div className="col py-2">
                <a
                  href="#"
                  id="InstallNowButton"
                  className="mt-1 btn btn-secondary btn-lg"
                >
                  <i className="fa fa-download"></i>
                  Install Now
                </a>
              </div>
              <div className="col py-2">
                <a
                  href="#"
                  id="ShowSupportButton"
                  className="mt-1 btn btn-lg btn-warning btn-support"
                >
                  <i className="fa fa-heart"></i>
                  Support Us
                </a>
              </div>
              <div className="col py-2">
                <a
                  href="https://discord.pokemod.dev"
                  className="mt-1 btn btn-lg btn-primary"
                  target="_blank"
                >
                  <i className="fab fa-discord"></i>
                  Join our Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default HeroSection;
