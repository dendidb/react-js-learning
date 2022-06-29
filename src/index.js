import React from 'react';
import ReactDOM from 'react-dom/client';

// app
import App from 'container/app';

// styles
import 'assets/styles/app.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);