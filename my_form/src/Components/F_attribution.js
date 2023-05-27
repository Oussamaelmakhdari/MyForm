import React from 'react';
import { Link, Navigate } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AttribRow from './layout/AttribRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from "../images/qbm.png";


function F_attribution() {

  // const [goToattribu, setgoToattribu]=useState(false);
  const [employer, setemployer]=useState([]);  

  useEffect(()=>{  
    getemployer();
  },[]);  

  const getemployer=()=>{
    axios.get("http://localhost:8080/employers").then(data=>{
      let emp = data.data;
      setemployer(
       emp.map(d=>{
       return {
         select:false,
         id:d.id,
         name:d.name,
         material:d.material,
         type:d.type,
         nserie:d.nserie,
         remarque:d.remarque,
         departement:d.departement,
         date: new Date(d.date).toDateString(),
       };
      }));
    }).catch(err=>alert(err));
  }
  
  // if(goToattribu){
  //   return <Navigate to="/AttributionImp"/>
  // }
  const deleteEmployerByIds=() => {
    let arraysids = [];
    employer.forEach(d => {
      if(d.select){
        arraysids.push(d.id);
      }
    });
    axios.delete(`http://localhost:8080/employers/${arraysids}`).then(data => {
      console.log(data);
      getemployer()
    }).catch(() => toast.warning('Veuiller Selectioner une Recuperation'));
  };
  const handleSubmit = () => {
    // event.preventDefault();
    employer.forEach(d => {
      if(d.select){
        toast.success('Bénéficiaire supprimer avec succes');
      }})
    // Submit logic here
    
    // toast.success('Employer supprimer avec succes', {
    //   position: toast.POSITION.TOP_CENTER
   
  }

  return (
  <div className="F_attribution">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
  {/* <a className="navbar-brand"><img src={img} alt="My Image" className="top-left-image" style={{ width: '100px', height: 'auto' }} href=""/></a> */}
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
        <a className="nav-link" href="/"><img src={img} alt="My Image" className="top-left-image" style={{ width: '100px', height: 'auto' }} /></a>

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
    <a href="#" className="navbar-link"><strong>Chercher</strong></a>
  </div>
  </nav>
  {/* <div className=".container-sb" style={{padding:'1rem'}}>
        <a className="nav-link" href="/">Chercher</a>

  </div>  */}
    <header className="F_attribution">
    </header>
    <Link to='/F_attribution/addAtt'><button className="recub">Ajouter Bénéficiaire </button></Link>
    <button className="sup"
    type="submit" value='submit'
    onClick={() => {
      deleteEmployerByIds();
      handleSubmit()
    }}>
    Supprimer Bénéficiaire 
    </button>
    

      {/* <div> 
      <h4> Ordinateur :</h4>  <br/>
      <input type='checkbox' value='op'/> Ordinateur Portable 
      <input type='checkbox' value='tab'/>Tablette <br/>
      </div>

    <div>
    <h4>Accessoires de l’ordinateur :</h4> <br/>
      <input type='checkbox' value='sac'/> Sacoche
      <input type='checkbox' value='cchrg'/> Câble du chargeur
      <input type='checkbox' value='sr'/> Souris
      <input type='checkbox' value='cl'/> Clavier
      <input type='checkbox' value='chrg'/>Chargeur <br/>
      </div>

      <div>
      <h4>Téléphone :</h4> <br/>
      <input type='checkbox' value='gsm'/> GSM
      <input type='checkbox' value='fixe'/> Fixe
      <input type='checkbox' value='modem'/> Modem 3G/4G <br/>
      </div>
      
      <div>
      <h4>Accessoires du téléphone :</h4> <br/>
      <input type='checkbox' value='chrg'/> Chargeur
      <input type='checkbox' value='ect'/> Ecouteurs
      <input type='checkbox' value='cusb'/> Câble USB
      <input type='checkbox' value='chrgv'/>Chargeur de voiture <br/>
      </div>
      <br/>
      <br/> */}

<table className="table">
  <thead>
    <tr><th>
      <input
      type="checkbox"
      onChange={e => {
      let value = e.target.checked;
      setemployer(
      employer.map(d => {
      d.select = value;
      return d;
      })
    );
      }}/> </th>
      <th scope="col">Nom et Prenom</th>
      <th scope="col">Matériel	</th>
      <th scope="col">Type</th>
      <th scope="col">Numéro de serie</th>
      <th scope="col">Remarques</th>
      <th scope="col">Departement</th>
      <th scope="col">Date</th>
      <th scope="col">Editer</th>
      <th scope="col">Imprimer</th>
    </tr>
  </thead>
  <tbody>   
    <AttribRow employer={employer}
    setemployer={setemployer}
    />
  </tbody>
  </table>
  <ToastContainer />
  </div>
  );
}







export default F_attribution; 