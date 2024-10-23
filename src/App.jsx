import React, { useState, useEffect } from 'react';
import Main from './Pages/Main';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

const App = () => {


  return (
    <div className="App">
      
      <div className="container">
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;