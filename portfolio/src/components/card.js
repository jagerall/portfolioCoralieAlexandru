import React from 'react';
import '../style/card.scss';
import Tag from './tag';

const Card = ({ image, label, onClick, type, tags }) => {
    return (
        <div className="card" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
            <img src={image} alt={label} className="card-image" />
            <div className="overlay bold">
                <div className="project-name">{label}</div>
                {tags && tags.length > 0 && (
                    <div className="overlay-tags">
                        {tags.map((tag, index) => (
                            <Tag key={index} label={tag} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;