import React from 'react';

function PicGroup(props) {
  const userPhoto = <input type="file"/>;

  return(
    <label id={props.id} className="btn btn-default btn-file">
      {userPhoto}
    </label>
  );
}

export default PicGroup;
export {userPhoto};
