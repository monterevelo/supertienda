import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Variable global
import { URL } from './constants/global';

//Components
import NavBar from "./components/NavBar";
import NavBarLanding from "./components/NavBarLanding";

//Import screens
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import NotFound from "./screens/NotFound";
import Usuarios from "./screens/Usuarios";
import Clientes from "./screens/Clientes";
import Productos from "./screens/Productos";
import Categorias from "./screens/Categorias";
import Tiendas from "./screens/Tiendas";
import Ventas from "./screens/Ventas";
import Consulta1 from "./screens/Consulta1";
import Historia from "./screens/Historia";
import Mision from "./screens/Mision";
import Vision from "./screens/Vision";
import EnviarMensaje from "./screens/EnviarMensaje";
import ResponderMensaje from "./screens/ResponderMensaje";
import InfoDesarrollador from "./screens/InfoDesarrollador";
import MapaSitio from "./screens/MapaSitio";
import Registrarse from "./screens/Registrarse";
import IniciarSesion from "./screens/IniciarSesion";
import Salir from "./screens/Salir";


function App() {
  var component =
    <div>
      <NavBarLanding />
    </div>
  if (JSON.parse(localStorage.getItem('user')) != undefined && document.URL != URL) {
    component = <NavBar />
  } else {
    if (JSON.parse(localStorage.getItem('user')) != undefined && document.URL == URL) {
      window.location.href = URL + "home"
      component =
        <div>
          <NavBar />
          <Home />
        </div>
    } else {
      if (document.URL == (URL + "home")) {
        window.location.href = URL;
      };
    };
  };

  return (
    <BrowserRouter>
      <div>
        {component}
      </div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/consultacliente" element={<Consulta1 />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/enviarmensaje" element={<EnviarMensaje />} />
        <Route path="/respondermensaje" element={<ResponderMensaje />} />
        <Route path="/infodesarrollador" element={<InfoDesarrollador />} />
        <Route path="/mapasitio" element={<MapaSitio />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/iniciarsesion" element={<IniciarSesion />} />
        <Route path="/salir" element={<Salir />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
