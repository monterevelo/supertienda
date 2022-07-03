import React from 'react'
import {Navigate} from 'react-router-dom'


const Products =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Products</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Products;
