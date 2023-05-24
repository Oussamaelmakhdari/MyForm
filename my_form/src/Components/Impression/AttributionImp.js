import "../../App.css";
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Location } from 'react-router';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from "../../images/qbm.png";
import AttribForm from "../layout/AttribForm";

function AttributionImp() {
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
          setstateCust({
              id:employer.id,
              name:employer.name, 
              material:employer.material,
              type:employer.type,
              nserie:employer.nserie,
              remarque:employer.remarque
          });
      }).catch(err=>alert(err));
  }
  return (
    <div className="">
      <div>
      <div className="containerAtt">
          <img src={img} alt="My Image" className="top-left-image" style={{ width: '300px', height: 'auto' }} />
       </div>  
       <div className="container-emp">
          Employer ID : {stateCust.id}
       </div>  
       <div className="titleImp"><h1 className="phrase" style={{ color:'darkgreen'}}>Formulaire d'attribution du matériel (v 1.0)</h1><br/>
       <h6 className="under-title">Quality Bean Morocco</h6>
       </div>  

                  

        <AttribForm/> </div>
     </div>
    )
  }



export default AttributionImp;