import React from 'react';

const DropDownButton = (props) => {
  return(
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id={props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {props.name}
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {props.children}
      </div>
    </div>
  )
}

export default DropDownButton;
