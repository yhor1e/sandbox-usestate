import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const heading = 'sandbox-usestate';
ReactDOM.render(<App heading={heading} />, document.getElementById('app'));

console.log('App.js');
module.hot.accept();
