import React from 'react';
import { useState } from 'react';
import "./collapse.scss";
import iconO from '../../asset/images/collapse_icon.svg';

function Collapse({title, content }) {
    const [active, setActive] = useState(false)
const ouvertMenu = e =>{
    setActive(!active)
}

    return (
    <div className={`collapse ${active && "active"}`}>
        <div className='collapse__title' onClick={ouvertMenu}>
            {title} <img src={iconO} className='collapse__icon' alt='icon ouvert'></img>
        </div>
        <div className='collapse__content'>{content}</div>
    </div>
    )
}

export default Collapse