import React from 'react'
import {Navigate} from 'react-router-dom'


const InfoDesarrollador =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <h1>Información del Desarrollador</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default InfoDesarrollador
