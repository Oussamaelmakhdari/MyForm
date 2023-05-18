import React from 'react';
import {nanoid} from 'nanoid';
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import '../App.css';
import data from "../data.json";

function F_recuperation() {
  
  const [materiels, setmateriels] = useState(data);
  const [addformdata, setaddformdata] = useState({
    Materiel:'',
    Type:'',
    NSerie:'',
    Remarques:'',
    Mp:''
  })

  const [goToattribu, setgoToattribu]=useState(false);

  if(goToattribu){
    return <Navigate to="/recuImp"/>
  }
  
  const handleAddFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addformdata};
    newFormData[fieldName] = fieldValue;
    setaddformdata(newFormData);
  }
  
  const handleAddFormsubmit = (event)=>{
    event.preventDefault();
    const newMateriel={
      id: nanoid(),
      Materiel:addformdata.Materiel,
      Type:addformdata.Type,
      NSerie:addformdata.NSerie,
      Remarques:addformdata.Remarques,
      Mp:addformdata.Mp
  }
    const newMateriels = [...materiels,  newMateriel];
    setmateriels(newMateriels);
  }
  
  return (
    <div>
      <header className='recup'><h1> Formulaire de recuperation </h1></header>
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
      </div>
      
    </div>
  )
}

export default F_recuperation; 