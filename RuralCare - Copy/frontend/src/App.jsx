import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/AboutUs';
import LandingPage from './Pages/LandingPage';
import Doctorlogin from './Pages/Doctorlogin';
import Patientlogin from './Pages/Patientlogin';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/patientlogin" element={<Patientlogin/>} />
          <Route path="/doctorlogin" element={<Doctorlogin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

