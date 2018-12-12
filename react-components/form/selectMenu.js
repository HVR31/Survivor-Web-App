import React from 'react';

function FormSelectMenu(props) {
  return (
    <div className="form-select-menu">
      <label htmlFor={props.id} >{props.name}</label>
      <select className="form-control" id={props.id}>
        {props.children}
      </select>
    </div>
  )
}

export default FormSelectMenu;
