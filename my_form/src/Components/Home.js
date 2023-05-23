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
    <header className="Home-header">.
      {/* <form className="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
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