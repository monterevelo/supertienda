import React from 'react'
import {Navigate} from 'react-router-dom'


const ResponderMensaje =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) !== undefined){
    component = <h1>Responder Mensaje</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default ResponderMensaje
