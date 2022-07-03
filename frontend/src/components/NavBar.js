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
            <NavDropdown.Item href="developerinfo">Developer Information</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="sitemap">Site Map</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/home">
            <Image src= {user.photoUrl} width="30px" height="30px" roundedCircle />
          </Nav.Link>
          <Nav.Link href="/home">
            <strong>{user.name}</strong>
          </Nav.Link>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/" onClick={logOut}>Log Out</Nav.Link>
        </Nav>
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
