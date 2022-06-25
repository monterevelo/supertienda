import React from 'react'
import {Navigate} from 'react-router-dom'


const Register =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Register</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Register
