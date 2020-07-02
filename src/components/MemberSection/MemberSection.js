import React, { Fragment } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { MemberCard } from '../FakeDatabase/Fakedatabase';
import { AwesomeButton } from 'react-awesome-button';
import styles from 'react-awesome-button/src/styles/themes/theme-c137';

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
    letter-spacing: 0.1em !important;
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
        <Row className="justify-content-center text-center p-2">
          {MemberCard.map((info, index) => (
            <Card key={index} style={{ width: '25rem' }} className="m-4 shadow">
              <Card.Body>
                <h2 className="text-center m-0 p-3">
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

                {info.benefits.items.map((itemText, index) => (
                  <Fragment key={index}>
                    <hr />
                    <p className="lead">{itemText}</p>
                  </Fragment>
                ))}
                <div className="p-3">
                  <AwesomeButton
                    type={info.price > 2 ? 'link' : 'primary'}
                    size="medium"
                    ripple
                    href={info.link}
                    className="text-decoration-none"
                  >
                    Join
                  </AwesomeButton>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MemberSection;
