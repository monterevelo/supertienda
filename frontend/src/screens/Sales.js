import React from 'react'
import {Navigate} from 'react-router-dom'


const Sales =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Sales</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Sales;
