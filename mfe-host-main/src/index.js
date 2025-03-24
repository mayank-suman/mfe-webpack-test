import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app.jsx';

const mountPoint = document.querySelector('.app');
const root = ReactDOM.createRoot(mountPoint);

root.render(<App />);
