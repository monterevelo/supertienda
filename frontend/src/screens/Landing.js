import React from 'react'
import MainLanding from '../components/MainLanding'
import LandingTopic from '../components/LandingTopic'
import {Navigate} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const Landing = () => {
  var component = <Navigate to="/" />
  if (JSON.parse(localStorage.getItem('session')) !== undefined) {   
    //OJO:   Solo en el Landing dejamos !==, las demás vistas con !=
    component = 
    <div>
      <MainLanding />
      <LandingTopic />
    </div>
  }
  return (
    <div>
      {component}
    </div>
  )
}

export default Landing

