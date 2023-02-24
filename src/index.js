import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import ThemeContextWrapper from './Components/themeContextWrapper.js';


ReactDOM.render(
    <ThemeContextWrapper >
    <App />
    </ThemeContextWrapper >,
    document.getElementById('root')
)