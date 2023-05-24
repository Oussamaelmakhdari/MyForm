import React from 'react';
import { Link } from 'react-router-dom';
function AttribRow(props) {
  return props.employer.map(d=>(
    <tr key={d.id}>
    {/* <th scope='row'>{d.id}</th> */}
    <td>
      <input type="checkbox" 
        checked={d.select}
        onChange={e => {
        let value = e.target.checked;
        props.setemployer(
        props.employer.map(sd => {
        if (sd.id === d.id) {
        sd.select = value;
        }
        return sd;
        })
      );
        }}
          />
           </td>
    <td>{d.name}</td>
    <td>{d.material}</td>
    <td>{d.type}</td>
    <td>{d.nserie}</td>
    <td>{d.remarque}</td>
    <td>{d.departement}</td>
    <td>{d.date}</td>

    <td><Link to={`/editAtt/${d.id}`}><button className="btn btn-primary btn-sm">Edit</button></Link></td>
    <td><Link to={`/AttributionImp/${d.id}`}><button className="btn btn-primary btn-sm">Imprimer</button></Link></td>
    </tr>
  ))
}





export default AttribRow