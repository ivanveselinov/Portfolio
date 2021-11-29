import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/home/Home";
import Main from "./components/aboutMe/Container";
import Project from "./components/projects/Project";
import ContactMe from "./components/contact/ContactMe";
import Experience from "./components/experience/Experience";
{/* <BrowserRouter>
<Routes>
  <Route path='/' element={ <Home /> } exact />
  <Route path='/airplanes' element={ < Main/>} />
  <Route path='/flights' element={ <Project /> } />
  <Route path='/search' element={ <Experience /> } />
  <Route path='/search' element={ <ContactMe /> } />
</Routes>
</BrowserRouter> */}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
