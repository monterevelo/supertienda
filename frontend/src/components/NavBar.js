import React from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'; //Se importa así ó incluyendolo en la instrucción 2
import Nav from 'react-bootstrap/Nav'; //Se importa así ó incluyendolo en la instrucción 2
import Image from 'react-bootstrap/Image';

const NavBar = (props) => {
  var user = JSON.parse(localStorage.getItem("user"));
  const closeSession = () => {
    //localStorage.removeItem("user");
    localStorage.clear();  //Mejor colocamos clear() para limpiar todas las claves, no solamente user.
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">Supertienda</Navbar.Brand>
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
              <Nav.Link href="consultacliente">Consulta1</Nav.Link>
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
                  <Image src={user.img} width="30px" height="30px" roundedCircle />
              </Nav.Link>
              <Nav.Link href="/home">
                  <strong>{user.name}</strong>
              </Nav.Link>
              
              <Nav.Link href="registrarse">Registrarse</Nav.Link>
              <Nav.Link href="iniciarsesion">Iniciar Sesión</Nav.Link>
              <Nav.Link href="/" onClick={closeSession}>Salir</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
