import axios from "axios";
import {React, useState, useEffect} from "react";
function AttServices() {
    const [employer, setemployer]=useState([]);  
       
    const search= async (search)=>{  
       return await axios.get(`/api/emps/search?keyword=${search}`);
        //    emp.map(d=>{

        //      select:false,
        //      id:d.id,
        //      name:d.name,
        //      material:d.material,
        //      type:d.type,
        //      nserie:d.nserie,
        //      remarque:d.remarque,
        //      departement:d.departement,
        //      date: new Date(d.date).toDateString(),
           
        //   });
        };
        
        return { search }

  }

  



export default AttServices;