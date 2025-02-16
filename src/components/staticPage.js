import React from 'react';
import '../style/staticPage.scss';

const StaticPage = ({ sections }) => {
    return (
        <main className="static-page">
            {sections.map((section, index) => (
                <div key={index} className="static-section">
                    <h1 className="static-section-title">{section.title}</h1>
                    <div className="static-section-content">{section.content}</div>
                </div>
            ))}
        </main>
    );
};

export default StaticPage;