import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/HomePage';
import HowWeDoIt from './components/HowWeDoIt';
import Story from './components/Story';
import Header from './components/Header';
import JobDetails from './components/JobDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div >
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/about"} element={<AboutUs/>}/>
          <Route path={"/contact"} element={<ContactUs/>}/>
          <Route path={"/careers"} element={<Careers/>}/>
          <Route path={"/howwedoit"} element={<HowWeDoIt/>}/>
          <Route path={"/story"} element={<Story/>}/>
          <Route path={"/jobs/:id"} element={<JobDetails/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;