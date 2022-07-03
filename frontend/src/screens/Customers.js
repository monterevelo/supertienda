import React from 'react'
import {Navigate} from 'react-router-dom'

const Customers =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Customers</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Customers;
