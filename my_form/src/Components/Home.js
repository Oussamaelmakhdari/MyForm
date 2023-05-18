import '../App.css';
import { Navigate } from "react-router-dom";
import React from 'react';

function Home() {
    const [goToattribu, setgoToattribu]=React.useState(false);   
    const [goTorecup, setgoTorecup]=React.useState(false);

     if(goTorecup){
      return <Navigate to="/F_recuperation"/>
    }
    
    if(goToattribu){
        return <Navigate to="/F_attribution"/>
    }
    
    return (
    <div className="Home">
      <header className="Home-header">
            <h1>FORMS</h1>
      </header>
      <div>
        <Navigate to="/"/>
      <button className="button" onClick={()=>{setgoToattribu(true)}}>Formulaire d'attribution du matériel</button>     <button className="button" onClick={()=>{setgoTorecup(true)}}>Formulaire de récupération du matériel</button>
      </div>
      <div className="Footer"></div>
    </div>
  );
}


export default Home; 