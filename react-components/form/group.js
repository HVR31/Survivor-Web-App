import React from 'react';

function FormGroup(props) {
  const text = props.text;
  const id = props.id;
  const type = props.type;
  const value = props.value;
  const handleChange = props.handleChange;
  return (
    <div className="form-group">
      <label htmlFor={id}>{text}</label>
      <input
      onChange={props.onChange}
      type={type}
      className="form-control"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
      />
    </div>
  )
}

export default FormGroup;
