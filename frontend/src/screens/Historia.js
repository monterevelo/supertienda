import React from 'react'
import {Navigate} from 'react-router-dom'


const Historia =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) !== undefined){
    component = <h1>Historia</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Historia
