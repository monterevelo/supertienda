import React from 'react'
import {Navigate} from 'react-router-dom'

const Categories =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Categories</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Categories;
