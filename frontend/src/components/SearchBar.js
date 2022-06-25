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
        ¿En que ciudad está la <strong>Tienda</strong>?
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Pasto1")}>Pasto</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("ipiales2")}>Ipiales</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Tumaco3")}>Tumaco</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("Tuquerres4")}>TÚquerres</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => SaveCity("La Union5")}>La Uniónnnn</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchBar;
