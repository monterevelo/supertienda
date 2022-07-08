import React from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";

const NavBar = () => {

  var user = JSON.parse(localStorage.getItem("user"));
  console.log("Esta es una prueba...user",user);
  var role  = localStorage.getItem("role");
  console.log("Esta es una prueba...role",role);

  console.log("Prueba máxima1-user: ",user != undefined);
  console.log("Prueba máxima2-role: ",role == undefined);
  
  
  /* var navLinks = (
    <Nav>
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
    </Nav>
  ); */

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.clear();  //Con esto se borra todas las variables del localStorage
  };

  


  if (user != undefined  && role == undefined) {
    
    console.log("Existe user y no existe role");
    var navLinks = (
      
      <Nav>recarga;
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <NavDropdown title="About Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="history">History</NavDropdown.Item>
            <NavDropdown.Item href="mission">Mission</NavDropdown.Item>
            <NavDropdown.Item href="vision">Vision</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="administrators">Administrators</Nav.Link>
          <Nav.Link href="customers">Customers</Nav.Link>
          <Nav.Link href="products">Products</Nav.Link>
          <Nav.Link href="categories">Categories</Nav.Link>
          <Nav.Link href="stores">Stores</Nav.Link>
          <Nav.Link href="sales">Sales</Nav.Link>
          <NavDropdown title="Contact Us" id="collasible-nav-dropdown">
            <NavDropdown.Item href="sendmessage">Send Message</NavDropdown.Item>
            <NavDropdown.Item href="replymessage">Reply Message</NavDropdown.Item>
            <NavDropdown.Item href="developerinfo">Developer's Information</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="sitemap">Site Map</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/home">
            <Image src={user.photoUrl} width="30px" height="30px" roundedCircle />
          </Nav.Link>
          <Nav.Link href="/home">
            <strong>{user.name}</strong>
          </Nav.Link>

          <Nav.Link href="/" onClick={logOut}>Log Out</Nav.Link>
        </Nav>
      </Nav>
    );
  }else{ 
    navLinks = (
      <Nav>
        <Nav.Link href="https://fb.com">Facebook</Nav.Link>
        <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
      </Nav>
    );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SuperStore</Navbar.Brand>
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
