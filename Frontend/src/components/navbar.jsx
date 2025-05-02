import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { IoTicket } from "react-icons/io5";

const NavbarF = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            HoteLinking <IoTicket />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Promo</Nav.Link>
              <Nav.Link href="#link">Tus promociones</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarF;
