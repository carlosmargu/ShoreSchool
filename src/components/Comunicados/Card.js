import React from 'react';
import './Card.css'

const Card = ({title, description}) => <div className="tarjeta">
    <div className="titulo">{title}</div><br></br>
    <div className="descripcion">{description}</div>
</div>
export default Card;