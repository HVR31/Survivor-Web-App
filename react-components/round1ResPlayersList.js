import React from 'react';
import Card from './card/card.js';
import { playerValues } from './playerList/playersList.js';
import { result } from './data.js';
import { round1Results } from './data.js';
import { round2Results } from './data.js';

const Round1ResultsPlayerList = (props) => {
  //cardSection array will store all player cards(non-user)
  let cardSection = [];
  let cardText = props.cardText;
  let iterator = 0;
  //Iterates through each property in Player List object, inserts them into Cards
  //then stores into cardSection array
  for (const values of playerValues) {
    cardSection.push(<Card key={values.id} cardText={'Points: ' + round1Results[iterator]}
     cardImg={values.img} cardTitle={values.name} />);
    iterator++;
  }

  return (
    <div className="players-list">
      {cardSection}
    </div>
  );
}

export default Round1ResultsPlayerList;
