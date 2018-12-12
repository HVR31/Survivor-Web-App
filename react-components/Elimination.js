import React from 'react';
import Round1ResultsPlayerList from './round1ResPlayersList.js';
import FormSelectMenu from './form/selectMenu.js';
import FormTextarea from './form/textarea.js';
import { playerValues } from './playerList/playersList.js';

export class Elimination extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //playerNames= names of all players
    let playerNames = [];
    for(const values of playerValues){
      //user is set to null, players cannot vote themselves from options
      if(values.name == 'user'){
        playerNames.push(<option key={values.id}>{}</option>);
      } else{
        playerNames.push(<option key={values.id}>{values.name}</option>);
      }
    }

    return(
      <div className="elimination-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col col-7">
              <Round1ResultsPlayerList/>
            </div>
            <div className="col col-5">
              <FormSelectMenu id="round1-player-eliminating" name="Select a Player">
                {playerNames}
              </FormSelectMenu>
              <FormTextarea label="Why did you choose this player" rows='3' id="round1-elim-response"/>
              <button className="btn btn-danger" htmlFor="submit">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Elimination;
