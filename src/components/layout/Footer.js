import React, { Fragment } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import Features from '../layout/Features';
/* Old footer 

      <div className="m-0 p-0">
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
*/
const Footer = () => {
  return (
    <Fragment>
      <Card.Footer className="m-0 p-0">
        <Features />
        <div className="m-0 p-0">
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
