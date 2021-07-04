import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

import Search from '../Search';

function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>MySoccer</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/teams">
              <Nav.Link>Teams</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tournaments">
              <Nav.Link>Tournaments</Nav.Link>
            </LinkContainer>
          </Nav>
          {pathname.startsWith('/teams') || pathname.startsWith('/tournaments') ? <Search /> : null}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
