import React from 'react'
import { Stack } from 'react-bootstrap'
import RegistroUsuario from '../src/components/RegistroUsuario'
import { Navigate } from 'react-router-dom'

const Registrarse = () => {
  var component = <Navigate to="/" />
  if (JSON.parse(localStorage.getItem('user')) != undefined) {
    component = <Stack gap={2} className="col-md-5 mx-auto">
      <RegistroUsuario />
    </Stack>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Registrarse

