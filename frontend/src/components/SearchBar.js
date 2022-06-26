import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  
  const redirectUrl = "/consultacliente";
  function SaveCity(city){
    localStorage.setItem("city",city);
  }
  
  return (
    <Dropdown>
 
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <strong>¿En que ciudad está la Tienda?</strong>
      </Dropdown.Toggle> 
            
      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Pasto")}>Pasto</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Ipiales")}>Ipiales</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Tumaco")}>Tumaco</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Tuquerres")}>Tuquerres</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("La Union")}>La Union</Dropdown.Item>
      </Dropdown.Menu>
     
    </Dropdown>
  );
};

export default SearchBar;
