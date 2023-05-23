import React from 'react';
import { Link } from 'react-router-dom';
function AttribRow(props) {
  return props.employer.map(d=>(
    <tr>
    {/* <td><input type="checkbox" aria-label="Checkbox for following text input"/></td> */}
    {/* <th scope='row'>{d.id}</th> */}
    <td>{d.name}</td>
    <td>{d.material}</td>
    <td>{d.type}</td>
    <td>{d.nserie}</td>
    <td>{d.remarque}</td>
    <td><Link to={`/editAtt/${d.id}`}><button className="btn btn-primary btn-sm">Edit</button></Link></td>
    <td><Link to={`/AttributionImp/${d.id}`}><button className="btn btn-primary btn-sm">Imprimer</button></Link></td>
    </tr>
  ))
}





export default AttribRow