import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Login from './components/Login';
import GetStarted from './components/GetStarted';

function App() {

  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/get-started" element={<GetStarted/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
