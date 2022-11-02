import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<AboutUs/>}/>
        <Route path={"/contact"} element={<ContactUs/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;