import React from 'react';
import { Link } from 'react-router-dom';
import '../style/card.scss';

const Card = ({ image, label, onClick }) => {
    return (
        <div className="card" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
            <img src={image} alt={label} className="card-image" />
            <h2 className="card-label">{label}</h2>
        </div>
    );
};

export default Card;
