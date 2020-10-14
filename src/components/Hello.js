import React, { Component } from 'react';
import '../css/Hello.css';

const Hello = (props) => {
    
        return (
            <div className="fl tc">
                <h1>Hello desde react jajja {props.saludos}</h1>
                <p>si queremos regresar varias lineas
                entonces debemos de meter todo entre
                parentesis (), y todo el html debe de ir en un
                unico elemento like a div
                </p>
                <p>Si queremos colocar propiedades (props) a un componente
                    debemos de pasarlas en la misma tag algo asi: componente
                     propiedad = curlybrackets algo
                </p>
            </div>

        )

}

export default Hello;