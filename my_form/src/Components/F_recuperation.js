import React from 'react';
import {nanoid} from 'nanoid';
import '../App.css';
import data from "../data.json";
import { Link, Navigate } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RecupRow from './layout/RecupRow';
import img from "../images/qbm.png";

function F_recuperation() {
  
  // const [materiels, setmateriels] = useState(data);
  // const [addformdata, setaddformdata] = useState({
  //   Materiel:'',
  //   Type:'',
  //   NSerie:'',
  //   Remarques:'',
  //   Mp:''
  // })

  // const [goToattribu, setgoToattribu]=useState(false);

  // if(goToattribu){
  //   return <Navigate to="/RecuImp"/>
  // }
  
  // const handleAddFormChange = (event)=>{
  //   event.preventDefault();
  //   const fieldName = event.target.getAttribute('name');
  //   const fieldValue = event.target.value;
  //   const newFormData = { ...addformdata};
  //   newFormData[fieldName] = fieldValue;
  //   setaddformdata(newFormData);
  // }
  
  // const handleAddFormsubmit = (event)=>{
  //   event.preventDefault();
  //   const newMateriel={
  //     id: nanoid(),
  //     Materiel:addformdata.Materiel,
  //     Type:addformdata.Type,
  //     NSerie:addformdata.NSerie,
  //     Remarques:addformdata.Remarques,
  //     Mp:addformdata.Mp
  // }
  //   const newMateriels = [...materiels,  newMateriel];
  //   setmateriels(newMateriels);
  // }
  const [employer, setemployer]=useState([]);  

  useEffect(()=>{  
    getemployer();
  },[]);  

  const getemployer=()=>{
    axios.get("http://localhost:8080/recupemps").then(data=>{
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
         mp:d.mp
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
    axios.delete(`http://localhost:8080/recupemps/${arraysids}`).then(data => {
      console.log(data);
      getemployer();
    }).catch(err => toast.warning('Veuiller Selectioner une Recuperation'));
  };
  const handleSubmit = () => {
    // event.preventDefault();
    
    // Submit logic here
    
    employer.forEach(d => {
      if(d.select){
        toast.success('Recuperation supprimer avec succes');
      }})

    // toast.success('Employer supprimer avec succes', {
    //   position: toast.POSITION.TOP_CENTER
   
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
      <div className="F_attribution">
    <header className="F_attribution">
    </header>
    <Link to='/addrecup'><button className="recub">Ajouter Récupération </button></Link>
    <button className="sup"
    type="submit" value='submit'
    onClick={() => {
      deleteEmployerByIds();
      handleSubmit()
    }}>
    Supprimer Récupération </button>
    
    
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
      <th scope="col">Mot De passe</th>
      <th scope="col">Editer</th>
      <th scope="col">Imprimer</th>
    </tr>
  </thead>
  <tbody>   
    <RecupRow employer={employer}
    setemployer={setemployer}
    />
  </tbody>
  </table>
  <ToastContainer/>
  </div>
      {/* <header className='recup'><h1> Formulaire de recuperation </h1></header>
      <div className='app-container'>
      <table>
      <thead> 
        <tr>        
        <th>  Materiel  </th>
        <th>  Type  </th>
        <th>  Numero de serie  </th>
        <th>  Remarques  </th>
        <th>  MP </th>
        </tr>
    
      </thead>
      <tbody>
        {materiels.map((materiel)=>(
        <tr>
        <td>{materiel.Materiel}</td>
        <td>{materiel.Type}</td>
        <td>{materiel.NSerie}</td>
        <td>{materiel.Remarques}</td>
        <td>{materiel.Mp}</td>
        </tr>
        ))}
      </tbody>
      </table>
      <h2> Ajouter materiel</h2>
      <form onSubmit={handleAddFormsubmit} className='form'>
      <input id="in" type="text" name="Materiel" 
      required="required" 
      placeholder="Entrer un materiel" 
      onChange={handleAddFormChange}
      />
      <input id="in"  type="text" name="Type" 
      required="required" 
      placeholder="Entrer le type"
      onChange={handleAddFormChange}
      />
      <input id="in" type="text" name="NSerie" 
      required="required" 
      placeholder="Entrer le numero de serie..."
      onChange={handleAddFormChange}
      />
      <input id="in"   type="text" name="Remarques" 
      required="required" 
      placeholder="Entrer une remarque..."
      onChange={handleAddFormChange}
      />
      <input id="in"  type="text" name="Mp" 
      required="required" 
      placeholder="Entrer un Mot de passe..."
      onChange={handleAddFormChange}
      /><br/>
      <button className="recub" type="submit">Ajouter</button><button className='recub' onClick={()=>{setgoToattribu(true)}}>Enregistrer</button>
      </form>
      </div> */}
      
    </div>
  )
}

export default F_recuperation; 