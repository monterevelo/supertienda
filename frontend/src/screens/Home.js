import React from 'react'
import UserHome from '../components/UserHome'
import {Navigate} from 'react-router-dom'

const Home =() => {
  var user = JSON.parse(localStorage.getItem("user"));
  if(user === undefined){
    return <Navigate to="/" />;
  }
  return (
    <div>
      <UserHome />
    </div>
  );
};

export default Home;
