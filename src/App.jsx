//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Second from './Second';
import React from 'react';
function App() {
  return (
   
    <Routes>
    
         <Route path="/" element={<Home />} />
         <Route path="/second" element={<Second />} /> 
     </Routes>
 
  );
}

export default App;
