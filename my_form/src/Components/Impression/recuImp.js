import React from 'react'
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Location } from 'react-router';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RecuImp() {
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
    <div>
      Hi
    </div>
  )
}

export default RecuImp
