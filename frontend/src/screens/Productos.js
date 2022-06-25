import React from 'react'
import {Navigate} from 'react-router-dom'


const Productos =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Productos</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Productos
