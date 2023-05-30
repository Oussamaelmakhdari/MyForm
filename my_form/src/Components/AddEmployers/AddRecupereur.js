import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function AddRecupereur() {
  const submit= e =>{
    let name=e.target[0].value;
    let material=e.target[1].value;
    let type=e.target[2].value;
    let nserie=e.target[3].value;
    let remarque=e.target[4].value;
    let departement = e.target[5].value;
    let date = e.target[6].value;
    let mp = e.target[7].value;


    let data = {
        name,
        material,
        type,
        nserie,
        remarque,
        departement,
        date, 
        mp
    };
    console.log(data);
    postemployer(data)
}

const postemployer=(data)=>{
    axios.post("http://localhost:8080/recupemp", data).then((d)=>{
    console.log(d);
    }).catch(err=> toast.warning(' Veuiller Remplir tous Les champs')); 
}

const handleSubmit = (event) => {
    event.preventDefault();
    if ( (event.target[0].value !== "" ) &&
    (event.target[1].value !== "" ) &&
    (event.target[2].value !== "" ) &&
    (event.target[3].value !== "" ) &&
    (event.target[4].value !== "" ) &&
    (event.target[5].value !== "" ) &&
    (event.target[6].value !== "" )
    ) {
        toast.success('Recuperation Ajouter avec succes', {
            position: toast.POSITION.TOP_CENTER
          });
    }

    
    // Submit logic here
    
    // Show notification after successful submission
    
  }
  const vider = (e) =>{
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    e.target[3].value = "";
    e.target[4].value = "";
    e.target[5].value = "";
    e.target[6].value = "";
    e.target[7].value = "";
  }



  return (
    <div className="container my-3">
        <form onSubmit={(e)=>{
        e.preventDefault();
        submit(e);
        handleSubmit(e);
        vider(e);
    }}>
        <div className="form-group">
            <label ><strong>Nom Complet</strong> </label>
            <input type="text" className="form-control form-control-sm" placeholder="Entrer"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect2"><strong>Materiel</strong></label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>Ordinateur</option>
            <option>Téléphone</option>
            <option>Accessoires de l’ordinateur </option>
            <option>Accessoires du téléphone </option>
            </select>
        </div>
        <div className="form-group">
            <label ><strong>Type</strong></label>
            <input type="text" className="form-control form-control-sm" placeholder="Entrer "/>
        </div>
        <div className="form-group">
            <label ><strong>Numéro de serie</strong></label>
            <input type="text" className="form-control form-control-sm" placeholder="Entrer "/>
        </div>
        <div className="form-group">
            <label> <strong>Remarques</strong> </label>
            <input type="text" className="form-control form-control-sm" placeholder="Entrer "/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect2"><strong>Departement</strong></label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>Service d’achat et approvisionnements</option>
            <option>Finance</option>
            <option>Logistic </option>
            <option>Service de qualité </option>
            <option>Production et Conditionnement </option>
            <option>Maintenance </option>
            <option>Service de l’IT </option>
            <option>Service De comptabilité </option>
            <option>Service de Contrôle de Gestion </option>
            <option>DRH </option>
            </select>
        </div>
        <div className="form-group">
            <label > <strong>Date</strong></label>
            <input type="text" className="form-control form-control-sm" placeholder="aaaa-mm-jj"/>
        </div>
        <div className="form-group">
            <label ><strong>Mot de Passe </strong></label>
            <input type="text" className="form-control form-control-sm" placeholder="Entrer "/>
        </div>
        <button type="submit" value='submit' className="btn btn-success">Ajouter</button>
      </form>
      <ToastContainer />
    </div>
  )   
  
}



export default AddRecupereur