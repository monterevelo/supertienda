import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const NavBarLanding = (props) => {
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
              <Nav.Link href="https://www.facebook.com">Facebook</Nav.Link>
              <Nav.Link href="https://www.instagram.com">Instagram</Nav.Link>
              <Nav.Link href="salir">Salir</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarLanding;
