import React from "react";



const RegistryCheck = () => {


    var user = JSON.parse(localStorage.getItem("user"));


    if (user.flagNewUser == false) {
        console.log("Checking: El usuario ya existe");
        if (user.flagWithoutData == false) {
            console.log("Checking: El usuario ya está registrado");
        } else {
            console.log("Checking: El usuario NO está registrado");
        }
    } else {
        console.log("Checking: El usuario NO existe");
    }

    window.location.href = "/prueba";

    
}

export default RegistryCheck;