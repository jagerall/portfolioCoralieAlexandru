import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import reportWebVitals from './js/reportWebVitals';

import './style/index.scss';
import './style/reset.scss';
import './style/styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();