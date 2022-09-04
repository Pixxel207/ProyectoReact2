import React from 'react';
import {Contacto} from '../models/contacto.class';
import ContactoComponent from './ContactocomponenteB/ContactoComponent';

const ContactoForms = () => {
    const defaultContacto = new Contacto('Ivan','Amarilla','ivanchu816@gmail.com',true);
    return (
        <div>
            <h1>Contacto</h1>
            <ContactoComponent contacto={defaultContacto}></ContactoComponent>
        </div>
       
    );
};




export default ContactoForms;
