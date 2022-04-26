import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
  </Container>
</Navbar>
    </header>
  );
}

export default Header;