import React from 'react';
import '../style/staticPage.scss';

const StaticPage = ({ title, content }) => {
    return (
        <main className="static-page">
            <h1>{title}</h1>
            <div className="static-content">
                {content}
            </div>
        </main>
    );
};

export default StaticPage;
