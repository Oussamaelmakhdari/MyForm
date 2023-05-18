import React from 'react';

function AttribRow(props) {
  return props.customer.map(d=>(
    <tr>
    <td><input type="checkbox" aria-label="Checkbox for following text input"/></td>
    {/* <th scope='row'>{d.id}</th> */}
    <td>{d.name}</td>
    <td>{d.dob}</td>
    <td>{d.creditLimit}</td>
    <td>{d.creditLimit}</td>
    <td><button className="btn btn-primary btn-sm">Edit</button></td>
    </tr>
  ))
}




export default AttribRow