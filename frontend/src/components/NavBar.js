import React, { Component }  from "react";
import { Navbar, Nav, NavDropdown, Container, Image } from "react-bootstrap";

const NavBar = () => {

  var user = JSON.parse(localStorage.getItem("user"));
  var role = localStorage.getItem("role");

  Component = (
    <Nav>
      <Nav.Link href="https://fb.com">Facebook</Nav.Link>
      <Nav.Link href="https://instagram.com">Instagram</Nav.Link>
    </Nav>
  );
  
  //console.log("user: ",user);
  //console.log("role: ",role);

  /* if(user != undefined){
    console.log("user           : ",user);
    console.log("flagNewUser    : ",user.flagNewUser);
    console.log("flagWithoutData: ",user.flagWithoutData);
  }
  if(role != undefined){
    console.log("role           : ",role);
  }
  
  console.log("---------------------------------------");
  alert("NavBar:  Esta es una pausa No.00...para poder mirar la consola"); */


  const logOut = () => {
    localStorage.clear();  //Con esto se borra todas las variables del localStorage
  };

  if (user != undefined) {
    
    //If user exists - Comment
    //alert("NavBar: Ya existe usuario!!!!!!!!!!!");
    
    //Esta linea la dejamos pendiente:   user.flagWithoutData  = !user.flagWithoutData;
    //localStorage.setItem("user",JSON.stringify(user));
    //console.log("user           : ",user);
    //console.log("flagNewUser    : ",user.flagNewUser);
    //console.log("flagWithoutData: ",user.flagWithoutData);
    //console.log("role           : ",role);
    //alert("NavBar:  Esta es una pausa No.01...para poder mirar la consola");
    
    if (role == undefined) {
      //console.log("Existe user y no existe role");
      //alert("NavBar:  Esta es una pausa No.02...para poder mirar la consola");
      var navLinks = (
        <Nav>
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
      //console.log("Existe user y existe role");
      //alert("NavBar:  Esta es una pausa No.03...para poder mirar la consola...No se qué hacer?");
      
      navLinks = Component;
        

      //Si se da este caso, probablemente hay que remover el role del localStorage para continuar - Verificar
      //localStorage.removeItem("role");
    };
  } else {
    //console.log("User doesn't exist");
    //alert("NavBar:  Esta es una pausa No.04...para poder mirar la consola.");
    
    navLinks = Component;
    
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SuperStore</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            {navLinks}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
