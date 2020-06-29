import React, { Fragment } from 'react';
import {
  Jumbotron,
  Card,
  Container,
  CardGroup,
  CardDeck,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { MemberCard } from '../FakeDatabase/Fakedatabase';
import { AwesomeButton } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-c137';
import pokebag from '../../img/pokemon/pokebag.svg';
import star from '../../img/pokemon/star-1.svg';
import pokecoin from '../../img/pokemon/pokecoin.svg';

const MemberSection = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
.memberSection{
    background-color: #fff ;
  padding-top: 100px;
  padding-bottom: 100px;
}
.listFeaturesStyle {
  color: #ffc107 !important;
  font-size: xxx-large !important;}

.member-title {
  color: #292929 !important;
  padding-bottom: 50px;
}
.member-price {
    color: #292929 !important;
    font-family: Walsheim, sans-serif;
    position: relative;
    text-align: center;
    font-weight: 700 !important;
    font-size: 3rem !important;
    line-height: 1.25 !important;
    margin: 0px;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }
.member-month {
    color: rgb(112, 108, 100);
    font-family: aktiv-grotesk, sans-serif;
    letter-spacing: 0.1em;
    position: relative;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700 !important;
    font-size: 0.875rem !important;
    line-height: 1.5 !important;
    margin: 0px;
    transition: all 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
}
`}
      </style>
      <Container id="memberSection" fluid className="memberSection">
        <h1 className="member-title text-center p-2">Become a Member</h1>
        <Row className="justify-content-center text-center">
          {MemberCard.map((info) => (
            <Card style={{ width: '25rem' }} className=" m-4 shadow">
              <Card.Body className="justify-content-center justify-content-center">
                <h2 className="text-center">
                  <img
                    src={info.icon}
                    width="30"
                    height="30"
                    className="d-inline-block"
                    alt="icon"
                  />{' '}
                  {info.title}
                </h2>
                <hr />
                <h1 className="member-price text-center">{info.price}$</h1>
                <p className="member-month">PER MONTH</p>
                <Card.Text>
                  {info.benefits.items.map((itemText) => (
                    <Fragment>
                      <hr />
                      <p className="lead">{itemText}</p>
                    </Fragment>
                  ))}
                </Card.Text>{' '}
                <AwesomeButton
                  type={info.price > 2 ? 'link' : 'primary'}
                  size="medium"
                  ripple
                  href={info.link}
                  className="text-decoration-none"
                >
                  Join
                </AwesomeButton>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MemberSection;
