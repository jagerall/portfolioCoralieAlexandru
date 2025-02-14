import React from 'react';
import '../style/card.scss';

const Card = ({ image, label, onClick, type }) => {
    return (
        <div className="card" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
            <img src={image} alt={label} className="card-image" />
            <div className="overlay">
                <div className="project-name">{label}</div>
                <div className="separator"></div>
                <div className="project-name">{type}</div>
            </div>
        </div>
    );
};

export default Card;
