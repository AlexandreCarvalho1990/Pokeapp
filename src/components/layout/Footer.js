import React, { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
const Footer = () => {
  return (
    <Fragment>
      <div className="fixed-bottom">
        <div className="copyright text-center bg-dark">
          <div className="container mb-0 pt-3 pb-2">
            <p className="text-light">
              © 2020, made with
              <span className="text-danger">
                {' '}
                <FaHeart />{' '}
              </span>
              by
              <em>The Pokemod Group</em>.
            </p>
            <p className="small text-light mb-2">
              Pokémon, Pokémon character names &amp; images and Pokémon Go are
              trademarks of Nintendo® and The Pokémon Company®.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
