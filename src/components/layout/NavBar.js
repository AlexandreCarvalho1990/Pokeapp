import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import ModalItem from './ModalItem';
import logo from '../../img/logo.png';
import { listNavDropDown } from '../FakeDatabase/listNavDropDown';
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [itemClicked, setItemClicked] = useState(0);
  const handleClose = () => setShow(false);
  const handleClick = (key) => {
    setItemClicked(key);
    setShow(true);
  };
  return (
    <>
      <ModalItem
        key={itemClicked + 1}
        show={show}
        handleClose={handleClose}
        item={listNavDropDown[itemClicked]}
      />
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="shadow-sm bg-primary"
      >
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Pokemod"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title={<span className="text-dark my-auto">Features List</span>}
              id="collasible-nav-dropdown"
            >
              {listNavDropDown.map((listItem, index) => (
                <Fragment>
                  <NavDropdown.Item onClick={() => handleClick(index)}>
                    {listItem.name}
                  </NavDropdown.Item>
                </Fragment>
              ))}
            </NavDropdown>
          </Nav>
          <Nav className="text">
            <Nav.Link eventKey={2} as={Link} to="/join" className="text-dark">
              Join
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-dark">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
