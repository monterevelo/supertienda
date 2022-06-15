import React from 'react'
import {Navigate} from 'react-router-dom'


const Ventas =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <h1>Ventas</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Ventas
