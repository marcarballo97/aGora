import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Lobby from './components/looby';
import Hero from './components/inicio/hero'
import Description from './components/inicio/body';
import Router from './components/Router/Router';
import LogIn from './components/inicio/login';
import Nie from './components/inicio/registronie';
import Estudiante from './components/registros/registroestudiante'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <App/>
    <Footer />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
