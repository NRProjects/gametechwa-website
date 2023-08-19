import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Login from './components/Login';
import GetStarted from './components/GetStarted';
import { UserProvider } from './UserContext';

function App() {

  return (
    <div className='app-container'>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<FrontPage/>} />
            <Route path="/get-started" element={<GetStarted/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  )
}

export default App
