import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled, {createGlobalStyle} from "styled-components"


const Global = createGlobalStyle`

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

`

ReactDOM.render(
    <React.Fragment>
        <Global />
       <App />
    </React.Fragment>
   
 
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
