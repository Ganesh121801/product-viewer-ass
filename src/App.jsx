import React from 'react';
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ProtectedRoute from './components/ProtectedRoute'
function App() {

  return (
    <Routes>
     <Route path='/' element={ <Navigate to ="/dashboard" />}/>
     <Route path='/login' element={ <Login /> } />
     <Route path='/dashboard' element={
     
        <DashboardPage/>
      
     } />
    </Routes>
  )
}

export default App
