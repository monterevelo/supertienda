import React from 'react'
import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Supertienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <NavDropdown title="Quienes Somos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="historia">Historia</NavDropdown.Item>
                <NavDropdown.Item href="mision">Misión</NavDropdown.Item>
                <NavDropdown.Item href="vision">Visión</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="usuarios">Usuarios</Nav.Link>
              <Nav.Link href="clientes">Clientes</Nav.Link>
              <Nav.Link href="productos">Productos</Nav.Link>
              <Nav.Link href="categorias">Categorias</Nav.Link>
              <Nav.Link href="tiendas">Tiendas</Nav.Link>
              <Nav.Link href="ventas">Ventas</Nav.Link>
              <NavDropdown title="Contáctenos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="enviarmensaje">Enviar mensaje</NavDropdown.Item>
                <NavDropdown.Item href="respondermensaje">Responder mensaje</NavDropdown.Item>
                <NavDropdown.Item href="infodesarrollador">Info Desarrollador</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="mapasitio">Mapa del sitio</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="masdetalles">Más detalles</Nav.Link>
              <Nav.Link eventKey={2} href="noticias">Noticias</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
