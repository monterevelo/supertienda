import React from 'react'
import { Alert } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'


const NotFound = () => {
  var component = <Navigate to="/" />
  if (JSON.parse(localStorage.getItem('user')) != undefined) {
    component = <Alert key="1" variant="danger">
      Not Found
      <Alert.Link href="/">...    Return.</Alert.Link>
    </Alert>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default NotFound
