import React from 'react'
import {Navigate} from 'react-router-dom'


const Tiendas =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Tiendas</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Tiendas
