import React from 'react';
import Formgroup from './form/group.js';

export class ResearchLoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div id="research-sec" className="col col-12">
            <h2>Research Information</h2>
            <p>Who is the participant playing against(Enter research ID numbers below)</p>
            <Formgroup text="Researcher's First Name" id="researcher-name" type="text"/>
            <Formgroup text="University Name" id="univ-name" type="text"/>
            <Formgroup text="Participant Research ID Numbers" id="researcher-numbers" type="text"/>
            <Formgroup text="Who is the participant playing against?" id="particpant-versus" type="text"/>
            <button className="btn btn-primary" type="submit" onClick={this.props.researchBtn}>SUBMIT</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ResearchLoginPage;
