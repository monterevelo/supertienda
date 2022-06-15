import React from 'react'
import {Navigate} from 'react-router-dom'


const EnviarMensaje =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <h1>Enviar Mensaje</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default EnviarMensaje
