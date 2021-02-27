import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppFunction from './AppFunction';

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <App nome="Joel Nogueira" idade={31}/> {/* Props são estáticas e não podem ser modificadas */}
    <AppFunction nome="João Lima Severo" idade={999}/>
  </React.StrictMode>,
  document.getElementById('root')
);