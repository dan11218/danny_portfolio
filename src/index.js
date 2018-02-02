import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bulma/bulma.sass';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
