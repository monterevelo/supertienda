import React from "react";
import { Dropdown } from "react-bootstrap";

const SearchBar = () => {
  
  const redirectUrl = "/searchresults";
  const setSearchedCity = (selectedCity) => {
    console.log("Selecting city " + selectedCity);
    localStorage.setItem("city", selectedCity);
  };
  
  return (
    <Dropdown>
 
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          ¿En que ciudad está la <strong>Tienda</strong>?
      </Dropdown.Toggle> 
            
      <Dropdown.Menu>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedCity("Pasto")}>Pasto</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedCity("Ipiales")}>Ipiales</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedCity("Tumaco")}>Tumaco</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedCity("Tuquerres")}>Tuquerres</Dropdown.Item>
        <Dropdown.Item href={redirectUrl} onClick={() => setSearchedCity("La Union")}>La Union</Dropdown.Item>
      </Dropdown.Menu>
     
    </Dropdown>
  );
};

export default SearchBar;
