import React from "react";
import '../../App.css';
import img from '../../images/qbm.png';

// import Footer from "../layout/Footer";
// import Header from "../layout/Header";

function SearchRecup() {
  return (
    <div>
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
  <div className="navbar-right">
    <a href="/searchRecup" className="navbar-link"><strong>Chercher</strong></a>
    <a href="/" class="navbar-link">Deconnexion</a>

  </div>
  </nav>

      <div className="home-main">
        <form className="d-flex justify-content-center">
          <div className="form-group m-0">
            <input
              type="text"
              className="form-control search-form-control"
              placeholder="Entrer L'ID du Bénéficiaire "
            />
          </div>
          <button type="submit" className="ml-2 btn btn-success btn-sm">
            Chercher Recuperation
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchRecup;