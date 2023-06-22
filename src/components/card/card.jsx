
import React from 'react';
import "./card.scss";
import { NavLink } from 'react-router-dom';

function Card(props) {

return (
    <NavLink to="/logement" state={{appartementId: props.id}}>
        <div className='card'>
            <img src={props.imageUrl} alt='appartementImg'/>
            <div className='card__titre'>{props.title}</div>
        </div>
    </NavLink>
        );
}

export default Card;