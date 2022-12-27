import Login from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage'
import Protected from './comps/config/Protected';
import React, { useState } from 'react'

function App() {
  
  return (
    <Router basename='isdp-library'>
      <Routes>
        <Route path='/' element={<Protected LMT={MainPage}/> }/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </Router>
  )
}

export default App