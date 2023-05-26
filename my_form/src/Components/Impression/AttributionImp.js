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


function AttributionImp() {
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
              remarque:employer.remarque,
              departement:employer.departement,
              date:new Date(employer.date).toISOString().split("T")[0]
          });
      }).catch(err=>alert(err));
  }
  const handleprint = useReactToPrint({
    content : () => componentRef.current,
    documentTitle:"Formulaire d'attribution du materiels",
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
       <div className="titleImp"><h1 className="phrase" style={{ color:'darkgreen'}}>Formulaire d'attribution du matériel (v 1.0)</h1>
       <h6 className="under-title"> Quality Bean Morocco </h6><br/>
       <span className="champapp"><h5>Service Informatique</h5></span><br/>
        <h1 className="scndp" style={{ color:'darkgreen',
      }}>Formulaire d'attribution du matériel (v 1.0)</h1>
       <h6 className="under-title"> Quality Bean Morocco </h6> 
       <br/>        
       <br/>        
       <br/>        
       <br/>        
       <br/>        
       <br/>        
       <br/>        

       <span className="champapp"><h3>Champ d'application</h3></span><br/>
       <p>Ce formulaire décrit le matériel attribué aux nouveaux utilisateurs.</p><br/>
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
            <td className="tdf">Déterminer les caractéristiques du matériel qui sera utilisé par le nouvel utilisateur</td>
          </tr>
          <tr className="trf">
          <td className="tdf">Service informatique</td>
          <td className="tdf">Approuver le matériel choisi dans le formulaire.
              Lier le matériel à l'utilisateur dans la base de données GLPI après achat
            </td>
          </tr>
          <tr className="trf">
            <td className="tdf">Service achat</td>
            <td className="tdf">Achat du matériel Signer le bon de sortie lors de la livraison du matériel à l'utilisateur
          </td>
          </tr>
      </tbody>
    </table>
    <br/>
    <br/>
    <br/>
    <br/>

    <span className="champapp"><h3>Utilisation du formulaire</h3></span><br/>
      <p> Le formulaire ci-dessous doit être signé par le nouvel employé lors de la réception du matériel de la part du service informatique. </p>
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
       
        

      <span className="champapp"><h5>Service Informatique</h5></span><br/>
      <br/>
      <br/>
      <br/>
      <p>Le matériel suivant doit remplir la fonction pour laquelle il a été délivré à l'utilisateur 
        tout en respectant le code de conduite de l'infrastructure informatique.</p>
      <br/>
      <br/>
      <br/>

      <span className="champapp"><h5> Hardware </h5></span><br/>
      <table className="tabform">
      <thead>
      <tr className="trf">
          <th className="thf">Materiel</th>
          <th className="thf">Type</th>
          <th className="thf">Numero de serie</th>
          <th className="thf">Reamrques</th>

        </tr>
      </thead>
      <tbody>
        
          <tr className="trf">
            <td className="tdf"> {stateCust.material}</td>
            <td className="tdf"> {stateCust.type}</td>
            <td className="tdf"> {stateCust.nserie}</td>
            <td className="tdf"> {stateCust.remarque}</td>
          
          </tr>          
      </tbody>
    </table>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <span className="champapp"><h5>Déclaration de consentement</h5></span><br/>
      <p>Je m’engage à mettre à la disposition de l’entreprise <strong>Quality Bean Morroco</strong> le matériel cité en haut, au cas où je quitterai l’entreprise dans une période inférieure à deux ans.
       Dans le cas le téléphone sera endommagé ou perdu, quel que soit les conditions, l’entreprise ne procédera à aucun changement dans une période inférieure à deux ans.
      </p><br/>
      <p className="info"> <strong> Nom Complet : {stateCust.name} </strong><br/>
 
      <strong> Departement   : {stateCust.departement} </strong><br/>
      <strong> Date          : {stateCust.date} </strong><br/>
      <strong> Signature     : </strong>..................................
      </p>
      <br/>
      <br/>
      <br/>
      <p className="paragc"><p className="parg"><strong>Responsable Département</strong></p>       <p className="parg"><strong>Bénéficiaire </strong></p>
      </p>
      </div> 
     </div>
     {/* <button  className="recub" > Imprimer </button>  */}
     <button variant='success' class="print-button" onClick={handleprint}><span class="print-icon"></span></button>
     </>
    )
  }







export default AttributionImp;  