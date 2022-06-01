import React from 'react'
import {Navigate} from 'react-router-dom'

const Clientes =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <h1>Clientes</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Clientes
