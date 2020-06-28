import React, { Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';

const FeaturesListSection = () => {
  return (
    <Fragment>
      <Container fluid className="m-0 p-5">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </Fragment>
  );
};

export default FeaturesListSection;
