import React, { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import Features from '../layout/Features';

const Footer = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
    .card-footer {
        background-color: black;
        margin:0;
        padding:0;
    }
    `}
      </style>
      <Card.Footer>
        <Features />
        <div className="m-0 p-0">
          <div className="copyright text-center">
            <div className="container mb-0 pt-3 pb-2">
              <p className="text-light">
                © 2020, made with
                <span className="text-danger">
                  {' '}
                  <FaHeart />{' '}
                </span>
                by
                <em> The Pokemod Group</em>.
              </p>
              <p className="small text-secondary mb-2">
                Pokémon, Pokémon character names &amp; images and Pokémon Go are
                trademarks of Nintendo® and The Pokémon Company®.
              </p>
            </div>
          </div>
        </div>
      </Card.Footer>
    </Fragment>
  );
};

export default Footer;
