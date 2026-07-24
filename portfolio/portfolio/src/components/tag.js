import React from 'react';
import '../style/tag.scss';

const Tag = ({ label }) => {
    return (
        <span className="tag">
            {label}
        </span>
    );
};

export default Tag;
