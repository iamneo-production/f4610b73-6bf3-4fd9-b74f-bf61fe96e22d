import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login';
import RegistrationPage from './signup';

import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './homepage';
import Profile from './profile';
import Cart from './cart';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

