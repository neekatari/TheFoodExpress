import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Thefoodexpress from './Thefoodexpress';
import App from './App.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Thefoodexpress/>, document.getElementById('root'));
serviceWorker.unregister();
