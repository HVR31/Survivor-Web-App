import React from 'react';

export const FormTextarea =(props) => {
  return(
    <div className="form-group" >
      <label htmlFor={props.id}>{props.label}</label>
      <textarea className="form-control" id={props.id} rows={props.rows}></textarea>
    </div>
  )
}

export default FormTextarea;
