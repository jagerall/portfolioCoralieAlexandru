import React from 'react';
import '../style/card.scss';
import Tag from './tag';

const Card = ({ image, label, onClick, type, tags, category }) => {
    return (
        <div className={`card ${category ? `card-${category}` : ''}`} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
            <img src={image} alt={label} className="card-image" />
            <div className="overlay bold">
                <div className="project-name">{label}</div>
                {tags && tags.length > 0 && (
                    <div className="project-tags">
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