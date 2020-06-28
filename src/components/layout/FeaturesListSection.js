import React, { Fragment } from 'react';
import { Tab, Col, Row, Nav } from 'react-bootstrap';
import FeatureText from './FeatureText';
const FeaturesListSection = () => {
  return (
    <Fragment>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <FeatureText />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <FeatureText />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

export default FeaturesListSection;
