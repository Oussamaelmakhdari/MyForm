import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Location } from 'react-router';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';


function Editemployer() {
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
        axios.get(`http://localhost:8080/employer/${id}`)
        .then(d=>{
            console.log(d);
            let employer = d.data;
            setstateCust(employer)//.map(data=>{return {
            //     name:data.name, 
            //     material:data.material,
            //     type:data.type,
            //     nserie:data.nserie,
            //     remarque:data.remarque
            // }
            // }));
        })
        .catch(err=>alert(err))
    }

    return (
    <div className='container my-3'>
       <form onSubmit={e=>
        {e.preventDefault()}
        }>
        <div className="form-group">
            <label >Employer ID : {stateCust.id}</label>
            <input type="text" onchange={ (e)=>{
                    let value = e.target.value;
                    setstateCust({name:value});
                }
                        
            } value={stateCust.name}  className="form-control form-control-sm"/>
        </div>
        <div className="form-group">

            <label >Material {stateCust.id}</label>
            <input type="text" value={stateCust.material} onchange={ e=>{
                    let value = e.target.value;
                    setstateCust({material:value});
                }
                        
            } className="form-control form-control-sm"/>
            <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>Ordinateur</option>
            <option>Téléphone</option>
            <option>Accessoires de l’ordinateur </option>
            <option>Accessoires du téléphone </option>
            </select>
        </div>
        <div className="form-group">
            <label >Employer ID : {stateCust.id}</label>
            <input type="text" value={stateCust.type} onchange={ e=>{
                    let value = e.target.value;
                    setstateCust({type:value});
                }
                        
            } className="form-control form-control-sm"/>
        </div><div className="form-group">
            <label >Employer ID : {stateCust.id}</label>
            <input type="text" value={stateCust.nserie} onchange={ e=>{
                    let value = e.target.value;
                    setstateCust({nserie:value});
                }
                        
            } className="form-control form-control-sm"/>
        </div><div className="form-group">
            <label >Employer ID : {stateCust.id}</label>
            <input type="text" value={stateCust.remarque} onchange={ e=>{
                    let value = e.target.value;
                    setstateCust({remarque:value});
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Editer</button>
        </form>
    </div>
  )
}



export default Editemployer