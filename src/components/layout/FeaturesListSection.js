import React, { Fragment } from 'react';
import { Media, Jumbotron } from 'react-bootstrap';
import logoStar from '../../img/pokestart.svg';
import { ListFeatures } from '../FakeDatabase/Fakedatabase';

/* basic struture to build the list of features

          <Media as="li">
            <GiStarsStack className="listFeaturesStyle text-warning" />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

*/
const FeaturesListSection = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
    .jumbotron-fluid{
      background-color: #f5f5f5!important;
    }
    .listFeaturesStyle {
      color: #ffc107 !important;
      font-size: xxx-large !important;}
    
    .features-text {
      color: #292929 !important;
    }

    `}
      </style>
      <Jumbotron fluid className="m-0">
        <div className="d-flex justify-content-center m-0">
          <ul className="list-unstyled">
            <h1 className="features-text text-center p-5">Features</h1>{' '}
            {ListFeatures.map((item, index) => (
              <Fragment>
                <Media>
                  <img
                    width={64}
                    height={64}
                    className="mr-3"
                    src={logoStar}
                    alt="pokefeature"
                  />
                  <Media.Body>
                    <h5> {item.name}</h5>
                    <p>{item.text}</p>
                  </Media.Body>
                </Media>
              </Fragment>
            ))}
          </ul>
        </div>
      </Jumbotron>
    </Fragment>
  );
};

export default FeaturesListSection;
