import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import F_attribution from "./Components/F_attribution";
import F_recuperation from "./Components/F_recuperation";
import AttributionImp from './Components/Impression/AttributionImp';
import AddAttribueur from './Components/AddEmployers/AddAttribueur';
import Editemployer from './Components/EditEmployer/Editemployer';
import EditRecupereur from './Components/EditEmployer/EditRecupereur';
import AddRecupereur from './Components/AddEmployers/AddRecupereur';
import RecuImp from './Components/Impression/RecuImp';
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

          <Route path="/AttributionImp/:id" element={<AttributionImp/>}/> 
          <Route path="/RecuImp/:id" element={<RecuImp/>}/> 

          <Route path="/addAtt" element={<AddAttribueur/>}/>
          <Route path="/addrecup" element={<AddRecupereur/>}/>
          <Route path="/editAtt/:id" element={<Editemployer/>}/>
          <Route path="/editrecup/:id" element={<EditRecupereur/>}/>
        </Routes>
      </Router>       
    </div>
  );
}



export default App;