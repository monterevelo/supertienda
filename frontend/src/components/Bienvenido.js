import React from 'react'

const Bienvenido = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            <h3> Bienvenid@ {user.name} </h3>
        </div>
    )
}

export default Bienvenido;