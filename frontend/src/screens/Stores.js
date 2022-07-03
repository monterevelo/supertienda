import React from 'react'
import {Navigate} from 'react-router-dom'


const Stores =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Stores</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Stores;
