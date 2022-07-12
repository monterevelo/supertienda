import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

const Prueba = () => {
    //localStorage.removeItem("role");  //For security, we remove the role variable from Storage
    localStorage.setItem("role", "down"); //We assign a new default value to the role variable
    var user = JSON.parse(localStorage.getItem("user"));

    //console.log("user.flagNewUser....:", user.flagNewUser);
    //console.log("user.flagWithoutData:", user.flagWithoutData);
    //alert("Prueba:  Esta es una pausa No.1...para poder mirar la consola")

    
    //From here, we assume that the user already exists.

    if (user.flagWithoutData == false) {
        //console.log("Ya tengo datos de registro de usuario");
        //alert("Prueba: Esta es una pausa No.2...para poder mirar la consola")
        window.location.href = "/register";
    } else {
        //console.log("Todavía no tengo datos de registro de usuario");
        //alert("Prueba:  Esta es una pausa No.3...para poder mirar la consola")

        //Attention:
        //By default, the user.flagNewUser must be true. 
        //If the user.flagNewUser is false by default, 
        //it is because the person wants to login through Google. 
        //Then we must change it to true.
        //When the person wants to log in with their email, 
        //then the user.flagNewUser will be true and therefore there will be no problem.
        
        //*******************************
        //Aqui está pendiente configuracion para cuando se logea con Google,
        //ya que no permite registrarse porque el flagNewUser está en false por defecto
        //y por lo tnto hay que cambiarlo a true.
        
        /* var aaa = SignInButton;
        alert("Este es mi objeto: ",aaa);
        if() {
            user.flagNewUser = true;
            localStorage.setItem("user", JSON.stringify(user))
        } */ /* else { */
        //******************************* */

        const admin = () => {
            //console.log("I'm an Administrator");
            localStorage.setItem("role", "admin");
            window.location.href = "/register";
        };

        const cust = () => {
            //console.log("I'm a Customer");
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
        );
    };
};

export default Prueba;