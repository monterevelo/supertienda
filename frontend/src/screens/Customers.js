import React from 'react'
import {Navigate} from 'react-router-dom'
import SearchBar from '../components/SearchBar';
import { Stack } from 'react-bootstrap'

const Customers =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <div><br/><br/><h1 align="center">Customers</h1><br/><SearchBar /></div>
    

  }
  return (
    <div>
      <Stack gap={3} className="align-items-center">
      {component}
      </Stack>
    </div>
  )
}

export default Customers;
