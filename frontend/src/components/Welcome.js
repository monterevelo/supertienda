import React from 'react'

const Welcome = () => {
    var user = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            <h3> Welcome {user.name} </h3>
        </div>
    )
}

export default Welcome;