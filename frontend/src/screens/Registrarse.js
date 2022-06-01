import React from 'react'
import { Stack } from 'react-bootstrap'
import RegistroCliente from '../components/RegistroCliente'
import { Navigate } from 'react-router-dom'

const Registrarse = () => {
  var component = <Navigate to="/" />
  if (JSON.parse(localStorage.getItem('session')) != undefined) {
    component = <Stack gap={2} className="col-md-5 mx-auto">
      <RegistroCliente />
    </Stack>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Registrarse

