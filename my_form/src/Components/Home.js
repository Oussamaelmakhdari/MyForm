import '../App.css';
import { Link, Navigate } from "react-router-dom";
import React from 'react';
import img from "../images/qbm.png";

function Home() {
    const [goToattribu, setgoToattribu]=React.useState(false);   
    const [goTorecup, setgoTorecup]=React.useState(false);

    //  if(goTorecup){
    //   return <Navigate to="/F_recuperation"/>
    // }
    
    // if(goToattribu){
    //     return <Navigate to="/F_attribution"/>
    // }
    
    return (
    <div className="Home">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img href=""/>
  {/* <a className="navbar-brand">MY FORM</a> */}
  <button 
  className="navbar-toggler"
  type="button" 
  data-toggle="collapse" 
  data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" 
  aria-expanded="false" 
  aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"> </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
        <a className="nav-link" href="/home"><img src={img} alt="My Image" className="top-left-image" style={{ width: '100px', height: 'auto' }} /></a>

      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="../../component/customer/Customerrow">Employer</a>
      </li> */}
  </ul>

    {/* <form className="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
  <div class="navbar-right">
    {/* <a href="#" class="navbar-link"><strong>Chercher</strong></a> */}
    <a href="/" class="navbar-link">Deconnexion</a>
  </div>
  </nav>
    <header className="Home-header">
      {/* <form className="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form> */}
    </header>
    
      <div>
        <Navigate to="/home"/>
      <Link to="/F_attribution"><button className="button" >Formulaire d'attribution du matériel</button> </Link>   <Link to="/F_recuperation"> <button className="button">Formulaire de récupération du matériel</button></Link>
      </div>
      <div className="Footer"></div>
    </div>
  );
}





export default Home; 