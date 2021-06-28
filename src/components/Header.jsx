import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">MySoccerStat</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Leagues</Nav.Link>
          <Nav.Link href="#features">Commands</Nav.Link>
          <Nav.Link href="#pricing">League calendar</Nav.Link>
          <Nav.Link href="#pricing">Team calendar</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
