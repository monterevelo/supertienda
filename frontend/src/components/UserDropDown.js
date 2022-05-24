import React from 'react'
import {Dropdown} from 'react-bootstrap'

const UserDropDown = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    Cómo deseas ingresar?
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    
                    <Dropdown.Item href="usuarios">Usuario</Dropdown.Item>
                    <Dropdown.Item href="clientes">Cliente</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserDropDown
