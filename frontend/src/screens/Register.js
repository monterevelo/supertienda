import React from 'react'
import { Stack } from 'react-bootstrap'
import { Navigate } from "react-router-dom";
import AdministratorRegistry from '../components/AdministratorRegistry';
import CustomerRegistry from '../components/CustomerRegistry';

const Register = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    var role = localStorage.getItem("role");
    
    //console.log("Usuario no existe?...", user == undefined);
    //console.log("Sin rol?.............", role == undefined);
    //alert("Register:  Esta es una pausa No.4...para poder mirar la consola")

    if (user == undefined) {
        //alert("Register:  Esta es una pausa No.5...para poder mirar la consola")
        return <Navigate to="/" />;
    } else {
        //If user != undefined then it have flagNewUser and flagWithoutData - Comment
        //console.log("user.flagNewUser: ",user.flagNewUser);
        //console.log("user.flagWithoutData: ",user.flagWithoutData);
              
        
        if (user.flagNewUser == false && user.flagWithoutData == false) {
            //alert("Register:  Esta es una pausa No.6...para poder mirar la consola");
            localStorage.removeItem("role");
            return <Navigate to="/home" />;
        } else {
            if (role == "admin") {
                //alert("Register:  Esta es una pausa No.7...para poder mirar la consola")
                return (
                    <div>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <AdministratorRegistry />
                        </Stack>
                    </div>
                );
            };
            //alert("Register:  Esta es una pausa No.8...para poder mirar la consola")

            //If role is "customer" then go to CustomerRegistry
            return (
                <div>
                    <Stack gap={2} className="col-md-5 mx-auto">
                        <CustomerRegistry />
                    </Stack>
                </div>
            );
        };
    };
};


export default Register;