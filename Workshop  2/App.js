import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {}, "Hello World from React with npm packages");
        

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);