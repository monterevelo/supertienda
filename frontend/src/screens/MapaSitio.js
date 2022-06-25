import React from 'react'
import {Navigate} from 'react-router-dom'


const MapaSitio =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Mapa del Sitio</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default MapaSitio
