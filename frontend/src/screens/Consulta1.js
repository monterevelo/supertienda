import React from 'react'
import ConsultaCliente from '../components/ConsultaCliente'
import {Navigate} from 'react-router-dom'


const Consulta1 =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) !== undefined){
    component = <ConsultaCliente/>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Consulta1
