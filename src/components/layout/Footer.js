import React, { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Jumbotron } from 'react-bootstrap';
import Features from '../layout/Features';

const Footer = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
    .footer-pokemod {

      border-radius: 0!important;
        background-color: black;
    }
    `}
      </style>
      <Jumbotron className="footer-pokemod m-0 p-0">
        <Features />
        <div className="m-0 p-0">
          <div className="copyright text-center">
            <div className="">
              <p className="text-light">
                © 2020, made with
                <span className="text-danger">
                  {' '}
                  <FaHeart />{' '}
                </span>
                by
                <em> The Pokemod Group</em>.
              </p>
              <p className="small text-secondary m-0">
                Pokémon, Pokémon character names &amp; images and Pokémon Go are
                trademarks of Nintendo® and The Pokémon Company®.
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Fragment>
  );
};

export default Footer;
