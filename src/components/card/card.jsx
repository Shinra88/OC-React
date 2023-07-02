
import React from 'react';
import "./card.scss";
import { NavLink } from 'react-router-dom';

function Card(props) {

    const slug = `${props.id}-${props.title.toLowerCase().replace(/\s/g, '-')}`

return (
    <NavLink to={`/Logement/${slug}`}>
        <div className='card'>
            <img src={props.imageUrl} alt='appartementImg'/>
            <div className='card__titre'>{props.title}
            </div>
        </div>
    </NavLink>
        );
}

export default Card;