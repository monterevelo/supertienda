import React from 'react'
import MainLanding from '../components/MainLanding'
import LandingTopic from '../components/LandingTopic'
import { Navigate } from 'react-router-dom'

const Landing = () => {
  var component = <Navigate to="/" />;
  if (JSON.parse(localStorage.getItem("user")) !== undefined) {
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
  );
};

export default Landing;

