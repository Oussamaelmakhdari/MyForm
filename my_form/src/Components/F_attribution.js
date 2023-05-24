import React from 'react';
import { Link, Navigate } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import AttribRow from './layout/AttribRow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
         remarque:d.remarque
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
      getemployer();
    }).catch(err => alert(err));
  };
  const handleSubmit = () => {
    // event.preventDefault();
    
    // Submit logic here
    
    toast.success('Demandeur supprimer avec succes');

    // toast.success('Employer supprimer avec succes', {
    //   position: toast.POSITION.TOP_CENTER
   
  }

  return (
  <div className="F_attribution">
    <header className="F_attribution">
    </header>
    <Link to='/addAtt'><button className="recub">Ajouter Demandeur</button></Link>
    <button className="sup"
    type="submit" value='submit'
    onClick={() => {
      deleteEmployerByIds();
      handleSubmit()
    }}>
    Supprimer Demandeur</button>
    

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
      <th scope="col">Materiel	</th>
      <th scope="col">Type</th>
      <th scope="col">Numero de serie</th>
      <th scope="col">Remarques</th>
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