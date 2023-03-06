import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css";
import "w3-css/w3.css";

  if(window.innerWidth > 800){
    ReactDOM.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  else{
    ReactDOM.render(
      <React.StrictMode>
        <App/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }