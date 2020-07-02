import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../img/logo.png';
import logo2 from '../../img/pokemodred.png';
/* NavBar state for model functionality
{<span className="my-auto">Pokemod</span>}
*/

/* Login and Join System

            <Nav.Link
              eventKey={2}
              as={Link}
              to="/join"
              className="font-weight-bold text-dark"
            >
              Join
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">
              Log In
            </Nav.Link>

*/

const NavBar = () => {
  return (
    <Fragment>
      <style type="text/css">
        {`
    .navbar-pokemod {
        background-color: #ffffff;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    }
    `}
      </style>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="navbar-pokemod"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block"
            alt="Pokemod"
          />{' '}
          <strong>Pokemod</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="text">
            <AnchorLink href="#memberSection">
              <p className="nav-link text-dark font-weight-bold m-0">Join</p>
            </AnchorLink>
            <Nav.Link
              href="https://discord.com/invite/hW4djSw"
              className="text-dark m-0"
            >
              Discord
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
