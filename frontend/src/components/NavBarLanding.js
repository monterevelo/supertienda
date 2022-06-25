import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavBarLanding = () => {

  var user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("user");
  };

  if(user != undefined){
    return {logOut};
  }

  var navLinks = (
    <Nav>
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
      <Nav.Link href="https://google.com" onClick={logOut}>Salir</Nav.Link>
    </Nav>
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Supertienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {navLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarLanding;
