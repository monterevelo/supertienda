import React from 'react'
import {Navigate} from 'react-router-dom'


const IniciarSesion =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Iniciar Sesión</h1>
  }
  return (
    
    <div>
      {component}
    </div>
  )
}

export default IniciarSesion
