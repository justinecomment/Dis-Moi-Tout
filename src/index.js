import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import ScrollableAnchor from 'react-scrollable-anchor'

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(app , document.getElementById('root'));
registerServiceWorker();
