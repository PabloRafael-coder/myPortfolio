import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './my-portfolio';
import GlobalStyle from './styles/globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
      <Home />
      <GlobalStyle/>
    </>,
);
