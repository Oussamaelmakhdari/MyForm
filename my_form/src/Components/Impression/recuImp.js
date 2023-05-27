import "../../App.css";
import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Location } from 'react-router';
import QueryString from 'qs';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from "../../images/qbm.png";
import AttribForm from "../layout/AttribForm";
import {useReactToPrint} from 'react-to-print';


function RecuImp() {
  const componentRef = useRef();
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

  const handleprint = useReactToPrint({
    content : () => componentRef.current,
    documentTitle:"Formulaire De récuperation du materiels",
    // onAfterPrint: () => alert('Impression avec succes')
  });

  return (
    <>
    <div ref={componentRef} className="divgen">
      <div className="containerAtt">
          <img src={img} alt="My Image" className="top-left-image" style={{ width: '300px', height: 'auto' }} />
       </div>  
       <div className="container-emp" style={{padding:'1rem'}}>
           ID : {stateCust.id}
       </div> 
       <br/>
      <br/>
       <div className="titleImp"><h1 className="phrase" style={{ color:'darkgreen'}}>Formulaire de récupération du matériel (v 1.0)</h1>
       <h6 className="under-title"> Quality Bean Morocco </h6><br/>
       <span className="champapp"><h5>Departement IT</h5></span><br/>
        <h1 className="scndp" style={{ color:'darkgreen',
      }}>Formulaire de récupération du matériel (v 1.0)</h1>
       <h6 className="under-title"> Quality Bean Morocco </h6> 
       <br/>        
       <br/>        
       <br/>        
       <br/>        
       <br/>        
       <br/>        
       <br/>        

       <span className="champapp"><h3>Champ d'application</h3></span><br/>
       <p>Ce formulaire décrit le matériel récupéré chez un employé qui quitte l'entreprise QBM.</p><br/>
       <br/>
       <br/>
       <br/>
       <span className="champapp"><h3>Responsabiliter</h3></span><br/>


      <table className="tabform">
      <thead>
      <tr className="trf">
          <th className="thf">Fonctions</th>
          <th className="thf">Responsabilités</th>
        </tr>
      </thead>
      <tbody>
        
          <tr className="trf">
            <td className="tdf">Administrateur des lieux de travail</td>
            <td className="tdf">Réinitialisation du matériel et mise à jours des information dans GLPI</td>
          </tr>
          <tr className="trf">
          <td className="tdf">Service informatique</td>
          <td className="tdf">Stockage des différents documents dans l'archive</td>
          </tr>
          <tr className="trf">
            <td className="tdf">Responsable Ressources Humaines</td>
            <td className="tdf">Lancement de la procédure et envoi du formulaire au service IT
            </td>
          </tr>
      </tbody>
    </table>
    <br/>
    <br/>
    <br/>
    <br/>

    <span className="champapp"><h3>Utilisation du formulaire</h3></span><br/>
      <p> Ce formulaire est rempli par le responsable des ressources humaines et envoyé au service IT. </p>
      <br/>
      <br/>
      <br/>
      <br/>


      <span className="champapp"><h3>Archivage</h3></span><br/>
      <p> Le formulaire est archivé par le service informatique en deux versions :<br/>
            - Une version numérique sur le serveur de stockage.<br/>
            - Une version papier archivée dans un dossier
      </p>

      <br/>
      <br/>
      <br/>
      <br/>              
      <br/>        
      <br/>        
      <br/>        
      <br/>        
      <br/>        
      <br/>        
      <br/>    
      <br/>        
      <br/>  
      <br/>        
      <br/>  
      <br/>
    

      <span className="champapp"><h5>Departement IT</h5></span><br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <span className="champapp"><h5> Liste de matériel récupéré </h5></span><br/>
      <table className="tabform">
      <thead>
      <tr className="trf">
          <th className="thf">Materiel</th>
          <th className="thf">Type</th>
          <th className="thf">Numero de serie</th>
          <th className="thf">Reamrques</th>
          <th className="thf">Mot de Passe</th>


        </tr>
      </thead>
      <tbody>
        
          <tr className="trf">
            <td className="tdf"> {stateCust.material}</td>
            <td className="tdf"> {stateCust.type}</td>
            <td className="tdf"> {stateCust.nserie}</td>
            <td className="tdf"> {stateCust.remarque}</td>
            <td className="tdf"> {stateCust.mp}</td>    
          </tr>          
      </tbody>
    </table>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <p className="info"> <strong> Nom Complet : {stateCust.name} </strong><br/>
 
      <strong> Departement   : {stateCust.departement} </strong><br/>
      <strong> Date   : {stateCust.date} </strong><br/>
      <strong> Signature DRH  : </strong>..................................
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <strong> Signature Employé   : </strong>..................................
      {/* 
      <p className="paragc"><p className="parg"><strong>Responsable Département</strong></p>       <p className="parg"><strong>Bénéficiaire </strong></p>
      </p> 
      */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div> 
     </div>
     {/* <button variant='success' className="recub" onClick={handleprint}> Imprimer </button>  */}
     <button variant='success' class="print-button" onClick={handleprint}><span class="print-icon"></span></button>
     </>
  )
}

export default RecuImp