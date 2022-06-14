import React from 'react'
import {Navigate} from 'react-router-dom'


const Profile =() => {
  var component = <Navigate to="/"/>
  if(JSON.parse(localStorage.getItem('session')) !== undefined){
    component = <h1>Profile</h1>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Profile
