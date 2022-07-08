import React from 'react'
import { Stack } from 'react-bootstrap'
import { Navigate } from "react-router-dom";
import AdministratorRegistry from '../components/AdministratorRegistry';
import CustomerRegistry from '../components/CustomerRegistry';

const Register = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    var role = localStorage.getItem("role");
    
    if (user == undefined) {
        return <Navigate to="/" />;
    } else if (user.flagNewUser == false) {
        localStorage.removeItem("role");
        return <Navigate to="/home" />;
    } else if (role == "admin") {
        return (
            
            <div>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <AdministratorRegistry />
                </Stack>
            </div>
        )
    }

    //If role is "customer" then go to CustomerRegistry
    return (
        <div>
            <Stack gap={2} className="col-md-5 mx-auto">
                <CustomerRegistry />
            </Stack>
        </div>
    )

}

export default Register;