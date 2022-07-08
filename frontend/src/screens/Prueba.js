import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

const Prueba = () => {
    //localStorage.removeItem("role");  //For security, we remove the role variable from Storage
    localStorage.setItem("role", "down"); //We assign a new default value to the role variable
    var user = JSON.parse(localStorage.getItem("user"));
    
    //Attention:
    //By default, the user.flagNewUser must be true. 
    //If the user.flagNewUser is false by default, 
    //it is because the person wants to login through Google. 
    //Then we must change it to true.

    //When the person wants to log in with their email, 
    //then the user.flagNewUser will be true and therefore there will be no problem.
    
    if (user.flagNewUser = false) {
        user.flagNewUser = true;
        localStorage.setItem("user", JSON.stringify(user))
    }

    const admin = () => {
        //console.log("I'm an Administrator");
        localStorage.setItem("role", "admin");
        window.location.href = "/register";
    };

    const cust = () => {
        //console.log("I'm an Customer");
        localStorage.setItem("role", "customer");
        window.location.href = "/register";
    };

    Component = (
        <div className="d-grid gap-2">

            <br /><br /><br /><br /><br />
            <h2 style={{ textAlign: "center" }}>Choose your role</h2>
            <br />
            <Button variant="primary" size="lg" onClick={admin}>
                Administrador
            </Button>
            <Button variant="secondary" size="lg" onClick={cust}>
                Customer
            </Button>
        </div>
    );

    return (
        <div>
            {Component};
        </div>
    )

};

export default Prueba;