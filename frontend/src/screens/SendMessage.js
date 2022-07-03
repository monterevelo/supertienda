import React from 'react'
import {Navigate} from 'react-router-dom'


const SendMessage =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Send Message</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default SendMessage;
