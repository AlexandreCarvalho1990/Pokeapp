import React, { Fragment } from 'react';
import { Row, Card, Jumbotron } from 'react-bootstrap';
import Pokecoin from '../../img/pokemon/pokecoin.svg';
import BitcoinCode from '../../img/bitcoin_qrcode_big.png';
/* Teste testimonials 

<section class="py-5">
</section>

*/
const DonorSection = () => {
  return (
    <Fragment>
      <Jumbotron fluid className="m-0">
        <h1 className="member-title text-center p-2">
          <img
            src={Pokecoin}
            width="50"
            height="50"
            className="d-inline-block"
            alt="icon"
          />{' '}
          Support Us
        </h1>
        <Row noGutters={true} className="justify-content-center text-center">
          <Card style={{ width: '25rem' }} className=" m-4 shadow">
            <Card.Body>
              <div>
                <h2 className="text-center">With Bitcoin</h2>
                <hr />
                <img
                  src={BitcoinCode}
                  href="bitcoin:1PokemodTZFAFBhSPxRWf1JiumYJ2mvDdJ?message=Support%20Pok%C3%A9mod"
                  width="100%"
                  height="100%"
                  alt="icon"
                />{' '}
                <hr />
                <p className="font-weight-bold">
                  1PokemodTZFAFBhSPxRWf1JiumYJ2mvDdJ
                </p>
              </div>{' '}
            </Card.Body>
          </Card>
        </Row>
      </Jumbotron>
    </Fragment>
  );
};

export default DonorSection;
