import React from 'react';
import PicGroup from './form/picGroup.js';

export class PicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="pic-page">
        <h1>Take a Photo</h1>
        <p>Take a picture with the webcam in front of you,
        then save picture to 'Saved Pictures' folder in your desktop.</p>
        <div id="pic-body">
          <p>Select your picture from 'Saved Pictures' folder</p>
          <PicGroup id="upload-img-browse"/>
          <button onClick={this.props.uploadBtn} id="upload-img-btn" className="btn btn-primary" type="submit">Upload</button>
        </div>
      </div>
    );
  }
}

export default PicPage;
