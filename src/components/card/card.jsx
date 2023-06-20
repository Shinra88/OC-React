
import React from 'react';
import "./card.scss";

function Card(props) {
return (
        <div className='card'>
            <div className='card__titre'>{props.title}</div>
        </div>
        );
}

export default Card;