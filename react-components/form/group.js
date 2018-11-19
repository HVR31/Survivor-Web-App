import React from 'react';

function FormGroup(props) {
  const text = props.text;
  const id = props.id;
  const type = props.type;
  const value = props.value;
  return (
    <div className="form-group">
      <label htmlFor={id}>{text}</label>
      <input required onChange={props.onChange} type={type} className="form-control" name={props.name} id={props.id} placeholder={props.placeholder} value={value} />
    </div>
  )
}

export default FormGroup;
