import React from 'react';
import ReactDOM from 'react-dom/client';
import Div100vh from 'react-div-100vh';
import App from './App';

import { Container } from './style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Div100vh>
      <Container>
        <App />
      </Container>
    </Div100vh>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
