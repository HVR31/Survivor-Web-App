import React from 'react';
import PlayerList from './playerList/playersList.js';
import Round1ResultsPlayerList from './round1ResPlayersList.js';
import Card from './card/card.js';
import { playerValues } from './playerList/playersList.js';
import { result } from './data.js';
import { round1Results } from './data.js';
import { round2Results } from './data.js';

console.log(result + ' rnd1: ' + round1Results + ' rnd2: ' + round2Results);

export class Round1Results extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const resultsBtn = this.props.rnd1ResultsBtn;
    return(
      <div className="container-fluid">
        <div className="row">
          <div id="round1-results-left" className="col col-7">
            <h4>Here is how your team did:</h4>
            <Round1ResultsPlayerList/>
            <button onClick={resultsBtn} className="btn btn-primary" type="submit">Proceed to Elimintaion</button>
          </div>
          <div id="round1-results-right" className="col col-5">
          </div>
        </div>
      </div>
    );
  }
}

export default Round1Results;
