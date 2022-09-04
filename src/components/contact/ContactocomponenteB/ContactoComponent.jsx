import React from 'react';
import PropTypes from 'prop-types';
import {Contacto} from '../../models/contacto.class'


const ContactoComponent = ({contacto}) => {
    const online = 'Contacto En Línea';
    const disconnected = 'Contacto No Disponible'; 
    return (
        <div>
            <h1>Nombre: {contacto.nombre}</h1>
            <h2>Apellido: {contacto.apellido}</h2>
            <h3>Correo electronico: {contacto.email}</h3>
            <div>
                <button>{contacto.conectado?online:disconnected}</button>
            </div>

        </div>
    );
};


ContactoComponent.propTypes = {
    Contacto:PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
