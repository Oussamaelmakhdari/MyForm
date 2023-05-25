import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Location } from 'react-router';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EditRecupereur() {
    const {id} = useParams();
    // const location = useLocation();
    // const search = location?.search.substring(1);
    // QueryString.parse(search);
    const [stateCust, setstateCust]=useState({});
    useEffect(()=>{
        // let id = props?.match?.params.id;
        getEmployerById(id);
    },[]);
    
    const getEmployerById=(id)=>{
        axios.get(`http://localhost:8080/recupemp/${id}`)
        .then(d=>{
            console.log(d);
            let employer = d.data;
            setstateCust({
                id:employer.id,
                name:employer.name, 
                material:employer.material,
                type:employer.type,
                nserie:employer.nserie,
                remarque:employer.remarque,
                departement:employer.departement,
                date:new Date(employer.date).toISOString().split("T")[0],
                mp:employer.mp

            });
        }).catch(err=>alert(err));
    }

    const putEmployer=(e)=>{
        axios.put(`http://localhost:8080/recupemp/${stateCust.id}`, stateCust)
        .then(d=>{
            console.log(d);
            }).catch(err=>alert(err));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Submit logic here
        
        // Show notification after successful submission
        toast.success('Récupération Edité avec succées', {
          position: toast.POSITION.TOP_CENTER
        });
      }



  return (
    <div className='container my-3'>
        <form onSubmit={e=>
        {e.preventDefault();
            putEmployer(e);
            handleSubmit(e);
        }
        }>
        <div className="form-group">
            <label> Nom Complet : </label>
            <input type="text" onChange={ (e)=>{
                        let value = e.target.value;
                        setstateCust({
                        name:value,
                        id:stateCust.id,
                        material:stateCust.material,
                        type:stateCust.type,
                        remarque:stateCust.remarque,
                        nserie:stateCust.nserie,
                        departement:stateCust.departement,
                        date:stateCust.date,
                        mp:stateCust.mp

                    });
                }
                        
            } value={stateCust.name}  className="form-control form-control-sm"/>
        </div>
        <div className="form-group">

            <label >Material</label>
            <input type="text" value={stateCust.material} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({
                        material:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        type:stateCust.type,
                        nserie:stateCust.nserie,
                        remarque:stateCust.remarque,
                        departement:stateCust.departement,
                        date:stateCust.date,
                        mp:stateCust.mp



                    });
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <div className="form-group">
            <label >Type </label>
            <input type="text" value={stateCust.type} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({
                        type:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        material:stateCust.material,
                        nserie:stateCust.nserie,
                        remarque:stateCust.remarque,
                        departement:stateCust.departement,
                        date:stateCust.date,
                        mp:stateCust.mp


                    });
                }
                        
            } className="form-control form-c ontrol-sm"/>
        </div><div className="form-group">
            <label >Numero de serie </label>
            <input type="text" value={stateCust.nserie} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({
                        nserie:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        material:stateCust.material,
                        type:stateCust.type,
                        remarque:stateCust.remarque,
                        departement:stateCust.departement,
                        date:stateCust.date,
                        mp:stateCust.mp

                    
                    });
                        
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <div className="form-group">
            <label >Remarques </label>
            <input type="text" value={stateCust.remarque} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({remarque:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        type:stateCust.type,
                        material:stateCust.material,
                        nserie:stateCust.nserie,
                        departement:stateCust.departement,
                        date:stateCust.date,
                        mp:stateCust.mp


                    });
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <div className="form-group">
            <label> Departement </label>
            <input type="text" value={stateCust.departement} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({departement:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        type:stateCust.type,
                        material:stateCust.material,
                        remarque:stateCust.remarque,
                        nserie:stateCust.nserie,
                        date:stateCust.date,
                        mp:stateCust.mp

                    });
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <div className="form-group">
            <label >Date </label>
            <input type="text" value={stateCust.date} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({date:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        type:stateCust.type,
                        material:stateCust.material,
                        remarque:stateCust.remarque,
                        nserie:stateCust.nserie,
                        departement:stateCust.departement,
                        mp:stateCust.mp

                    });
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <div className="form-group">
            <label >Mot de passe </label>
            <input type="text" value={stateCust.mp} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({mp:value,
                        id:stateCust.id,
                        name:stateCust.name,
                        type:stateCust.type,
                        material:stateCust.material,
                        remarque:stateCust.remarque,
                        nserie:stateCust.nserie,
                        departement:stateCust.departement,
                        date:stateCust.date

                    });
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Editer</button>
        </form>
        <ToastContainer />
      
    </div>
  )
}


export default EditRecupereur