import React from 'react'
import {Navigate} from 'react-router-dom'


const ReplyMessage =() => {
  var component = <Navigate to="/" />
  if(JSON.parse(localStorage.getItem('user')) != undefined){
    component = <h1>Reply Message</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default ReplyMessage;
