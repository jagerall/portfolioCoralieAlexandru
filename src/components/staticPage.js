import React from 'react';
import '../style/staticPage.scss';

const StaticPage = ({ sections }) => {
    return (
        <main className="static-page">
            {sections.map((section, index) => (
                <div key={index} className="static-section">
                    <h2 className="static-section-title">{section.title}</h2>
                    <div className="static-section-content">{section.content}</div>
                </div>
            ))}
        </main>
    );
};

export default StaticPage;