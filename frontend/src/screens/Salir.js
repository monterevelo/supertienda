import React from 'react'
import {Navigate} from 'react-router-dom'


const Salir =() => {
  var component = <Navigate to="https://www.google.com" />
  //if(JSON.parse(localStorage.getItem('user')) == undefined){
    //component = <Navigate to="https://www.google.com" />
  //}
  return (
    <div>
      {component}
    </div>
  )
}

export default Salir
