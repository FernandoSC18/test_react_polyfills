 
//import './polyfills' 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import reportWebVitals from './reportWebVitals';  
import { Routes , Route, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/home'
import Lista from './pages/lista'

const paddingStyle = {
  padding: '0 15px'
}

const App = () => {  


  return <div style={paddingStyle}>   
          <Router>   
              <Routes >
                <Route exact path="/" element={<Home/>} /> 
                <Route exact path="/lista" element={<Lista/> } /> 
              </Routes >
          </Router>
    </div>
}

ReactDOM.render(<React.StrictMode>
                  <App />
                </React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
