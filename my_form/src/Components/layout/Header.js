import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (

  <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <img href=""/>
  <a className="navbar-brand">MY FORM</a>
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
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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
  </nav>
  </div>
  );
}

export default Header;