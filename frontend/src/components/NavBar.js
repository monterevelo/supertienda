import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";

const NavBar = () => {
  var user = JSON.parse(localStorage.getItem("user"));
  var navLinks = (
    <Nav>
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
    </Nav>
  );

  const logOut = () => {
    localStorage.removeItem("user");
  };

  if (user != undefined) {
    navLinks = (
      <Nav>
        <Nav className="me-auto">
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
          <Nav.Link href="/home">
            <Image src= {user.photoUrl} width="30px" height="30px" roundedCircle />
          </Nav.Link>
          <Nav.Link href="/home">
            <strong>{user.name}</strong>
          </Nav.Link>
          <Nav.Link href="/home">Inicio</Nav.Link>
          <Nav.Link href="/" onClick={logOut}>Salir</Nav.Link>
        </Nav>
      </Nav>
    );
  }

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

export default NavBar;
