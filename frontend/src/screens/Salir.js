import React from 'react'
import {Navigate} from 'react-router-dom'


const Salir =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <a href="https://www.google.com/"></a>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Salir
