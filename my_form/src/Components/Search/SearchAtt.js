import React, { useState } from "react";
import '../../App.css';
import img from '../../images/qbm.png';
import AttServices from "../SearchServices/AttServices";
import axios from "axios";
// import Footer from "../layout/Footer";
// import Header from "../layout/Header";

const SearchAtt = () => {
  // const {search} = AttServices();
  // const [id, setId]=useState([]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const handleSearch = () => {
  if (searchTerm) {
    if (!isNaN(searchTerm)) {
      axios.get(`/api/products/search?id=${searchTerm}`)
        .then(response => {
          setProducts(response.data ? [response.data] : []);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.log("What the fuck");
      // Handle invalid search term for ID (non-numeric)
      // You can display an error message or handle it as per your application's logic
    }
  }

  // const handleSearch = () => {
  //   axios.get(`/api/emps/search${queryParams}`)
  //     .then(response => {
  //       setProducts(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };
  }
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
  <span className="navbar-toggler-icon"></span>
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
  </ul>``

    {/* <form className="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
  <div className="navbar-right">
    <a href="/searchAtt" className="navbar-link"><strong>Chercher</strong></a>
    <a href="/" class="navbar-link">Deconnexion</a>

  </div>
  </nav>
<div className="home-main">
  <form className="d-flex justify-content-center">
  <div className="form-group m-0">
      <input
        type="text"
        placeholder="Enter ID"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.materiel}</p>
          </div>
        ))}
      </div>
      </div>
    <button className="ml-2 btn btn-success btn-sm" onClick={handleSearch}>Chercher</button>
    </form>
</div>

      {/* <div className="home-main">
        <form className="d-flex justify-content-center">
          <div className="form-group m-0">
            <input
              type="text"
              className="form-control search-form-control"
              placeholder="Entrer L'ID du Bénéficiaire "
              onChange={async (e)=>
              { 
                const value = e.target.value;
                try{
                const res = await search(value) ;
                const {content} = res.data;
                const tempList =content.map((d)=>`${d.id} ${d.name}`);
                setId(tempList)
                console.log(id);
              } catch (error){
                console.log(error);
              } 
              }}
            />
          </div>
          <button type="submit" className="ml-2 btn btn-success btn-sm">
            Chercher Bénéficiaire
          </button>
        </form>
        {id}
      </div> */}

    </div>
  );
}



export default SearchAtt;