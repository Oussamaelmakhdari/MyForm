import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import F_attribution from "./Components/F_attribution";
import F_recuperation from "./Components/F_recuperation";
import AttributionImp from './Components/Impression/AttributionImp';
import recuImp from './Components/Impression/recuImp';
import React from 'react';
import Header from './Components/layout/Header';
  
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/F_attribution" element={<F_attribution/>}/>
          <Route path="/F_recuperation" element={<F_recuperation/>}/> 
          <Route path="/AttributionImp" element={<AttributionImp/>}/> 
          <Route path="/recuImp" element={<recuImp/>}/> 
        </Routes>
      </Router>       
    </div>
  );
}



export default App;