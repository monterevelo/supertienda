import React from 'react'
import {Carousel} from 'react-bootstrap'
import SigninButton from './SigninButton'

const MainLanding = () => {
    const estilo = {
        backgroundColor: "rgb(0,0,0,0.5)"
    }
    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://antiguavidanueva.com/wp-content/uploads/2020/08/IMG-20190622-WA0022-e1605718134281-1024x428.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={estilo}>
                    <h1>Supertienda</h1>
                    <h3>La forma inteligente de manejar tu negocio</h3>
                    <SigninButton/>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src="https://duralcor.es/wp-content/uploads/2021/04/almacen-de-materiales-de-construccion-en-madrid-1-1024x428.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption style={estilo}>
                    <h1>Supertienda</h1>
                    <h3>La forma inteligente de manejar tu negocio</h3>
                    <SigninButton/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default MainLanding
