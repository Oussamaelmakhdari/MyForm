import React from 'react';
import { Navigate } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AttribRow from './layout/AttribRow';
function F_attribution() {

  const [goToattribu, setgoToattribu]=useState(false);
  const [customer, setCustomer]=useState([]);  

  useEffect(()=>{
    getCustomer();
    },[]);  

  const getCustomer=()=>{
    axios.get("http://localhost:8080/customers").then(data=>{
      setCustomer(data.data);
    }).catch(err=>alert(err));
  }

  if(goToattribu){
    return <Navigate to="/AttributionImp"/>
  }

  return (
  <div className="F_attribution">
    <header className="F_attribution">
          <h1> Formulaire d'attribution </h1>
    </header>
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
    <tr>
      <th scope="col">Select</th>
      <th scope="col">Ordinateur</th>
      <th scope="col">Accecoir_Ordinateur</th>
      <th scope="col">Telephone</th>
      <th scope="col">Accecoir_Telephone</th>
    </tr>
  </thead>
  <tbody>   
    <AttribRow customer={customer}/>
  </tbody>
   </table>
    <button  onClick={()=>{setgoToattribu(true)}}> Enregistrer </button>
    </div>
  );
}

export default F_attribution; 