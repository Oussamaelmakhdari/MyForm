import React from 'react'
import axios from 'axios';
function AddAttribueur() {
    const submit= e =>{
        let name=e.target[0].value;
        let material=e.target[1].value;
        let type=e.target[2].value;
        let nserie=e.target[3].value;
        let remarque=e.target[4].value;

        let data = {
            name,
            material,
            type,
            nserie,
            remarque
        };
        console.log(data);
        postemployer(data)
    }

    const postemployer=(data)=>{
        axios.post("http://localhost:8080/employer", data).then((d)=>{
        console.log(d);
        }).catch(err=>alert(err)); 
    }
    
  return (
    <div className="container my-3">
        <form onSubmit={(e)=>{
        e.preventDefault();
        submit(e);
    }}>
        <div className="form-group">
            <label >Nom Complet </label>
            <input type="text" className="form-control form-control-sm" placeholder="Enter"/>
        </div>
        <div className="form-group">
            <label for="exampleFormControlSelect2">Materiel</label>
            <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>Ordinateur</option>
            <option>Téléphone</option>
            <option>Accessoires de l’ordinateur </option>
            <option>Accessoires du téléphone </option>
            </select>
        </div>
        <div className="form-group">
            <label >Type</label>
            <input type="text" className="form-control form-control-sm" placeholder="Enter "/>
        </div>
        <div className="form-group">
            <label >Numero de serie</label>
            <input type="text" className="form-control form-control-sm" placeholder="Enter "/>
        </div>
        <div className="form-group">
            <label >Reamrques </label>
            <input type="text" className="form-control form-control-sm" placeholder="Enter "/>
        </div>
        <button type="submit" value='submit' className="btn btn-primary btn-sm">Ajouter</button>
      </form>
    </div>
  )    
}


export default AddAttribueur;