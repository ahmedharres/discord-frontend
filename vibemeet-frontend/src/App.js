import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './authPages/LoginPage/Loginpage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import Dashboard from "./Dashboard/Dashboard";
import AlertNotifications from './shared/components/AlertNotifications';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      <AlertNotifications />
    </Router>
  );
}

export default App;
