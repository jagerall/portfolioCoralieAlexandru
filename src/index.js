import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import reportWebVitals from './js/reportWebVitals';
import '../src/style/index.scss';
import '../src/style/reset.scss';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
