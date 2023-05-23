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
            <input type="text" onChange={ (e)=>{
                    let value = e.target.value;
                    setstateCust({name:value});
                }
                        
            } value={stateCust.name}  className="form-control form-control-sm"/>
        </div>
        <div className="form-group">

            <label >Material</label>
            <input type="text" value={stateCust.material} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({material:value});
                }
                        
            } className="form-control form-control-sm"/>
        </div>
        <div className="form-group">
            <label >Type </label>
            <input type="text" value={stateCust.type} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({type:value});
                }
                        
            } className="form-control form-control-sm"/>
        </div><div className="form-group">
            <label >Numero de serie </label>
            <input type="text" value={stateCust.nserie} onChange={ e=>{
                    let value = e.target.value;
                    setstateCust({nserie:value});
                }
                        
            } className="form-control form-control-sm"/>
        </div><div className="form-group">
            <label >Reamrques </label>
            <input type="text" value={stateCust.remarque} onChange={ e=>{
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