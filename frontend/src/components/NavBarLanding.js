import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

const NavBarLanding = () => {
  const closeSession = () =>{
    localStorage.clear();
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Supertienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              
              <Nav.Link href="https://www.facebook.com/german.montenegrox" onClick={closeSession}>Facebook</Nav.Link>
              <Nav.Link href="https://www.instagram.com" onClick={closeSession}>Instagram</Nav.Link>
              <Nav.Link href="https://www.google.com" onClick={closeSession}>Salir</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarLanding;
