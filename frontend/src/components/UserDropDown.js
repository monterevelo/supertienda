import React from 'react'
import {Dropdown} from 'react-bootstrap'

const UserDropDown = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    En qué ciudad necesitas buscar?
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    
                    <Dropdown.Item href="usuarios">Paris</Dropdown.Item>
                    <Dropdown.Item href="clientes">Londres</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserDropDown
