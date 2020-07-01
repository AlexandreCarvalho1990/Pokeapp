import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'react-bootstrap';
import Notfound from '../../img/NotFound.png';
const NotFound = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
        .container-404{
          margin: 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80vh;
          padding-top: 150px;
          padding-bottom: 150px;
        };
        .text-container-404 {
          display: flex;
          justify-content: center;
          margin: 0px auto;
          padding: 20px;
          max-width: 500px;
          text-align: center;
          padding-bottom: 60px;
        };
        `}
      </style>
      <Jumbotron fluid className="container-404">
        <img src={Notfound} height="100%" width="auto" />
        <div className="text-container-404">
          <h5 className="heading-404">
            Sorry we couldn't find the page you're looking for.
          </h5>
          <div>
            <p>
              Please try retyping the address or just head back to our{' '}
              {<Link to="/">homepage.</Link>}
            </p>
          </div>
        </div>
      </Jumbotron>
    </Fragment>
  );
};

export default NotFound;
