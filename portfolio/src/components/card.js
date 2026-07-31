import React from 'react';
import '../style/card.scss';
import Tag from './tag';

const Card = ({ image, label, onClick, type, tags, category }) => {
    const tagsText = tags && tags.length > 0 ? tags.join(' • ') : '';
    const typeText = type ? type : '';
    const curvedTextContent = [label, typeText].filter(Boolean).join(' • ');
    const uniqueId = `curve-${label.replace(/\s+/g, '-').toLowerCase()}-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className="card-wrapper" onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
            <div className={`card ${category ? `card-${category}` : ''}`}>
                <img src={image} alt={label} className="card-image" />
                <div className="overlay bold">
                    <div className="project-name">{label}</div>
                    <div className="project-tags">
                            {tags}
                        </div>
                </div>
            </div>

            <div className="mobile-curved-text">
                <svg viewBox="0 0 200 200" className="curved-svg">
                    <path id={uniqueId} fill="transparent" d="
                        M 100, 100
                        m -96, 0
                        a 96,96 0 1,1 192,0
                        a 96,96 0 1,1 -192,0
                    " />
                    <text>
                        <textPath href={`#${uniqueId}`} startOffset="25%" textAnchor="middle" fill="#FA0026">
                            {curvedTextContent}
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

export default Card;