import React from 'react';
import Card from '../card/card.js';
import {userPhoto} from '../form/picGroup.js';

const defaultPic = '../../assets/default.jpg';


export const playerList = {
  user: {
    name:'user',
    age:'22',
    img: defaultPic,
    id: 0
  },
  player1: {
    name:'Daniella',
    age:'22',
    img: '../../assets/Daniella.jpg',
    id: 1
  },
  player2: {
    name:'Mark',
    age:'24',
    img: '../../assets/mark.jpg',
    id: 2
  },
  player3: {
    name: 'Gloria',
    age:'21',
    img: '../../assets/Gloria.jpg',
    id: 3
  },
  player4: {
    name: 'Stefany',
    age:'22',
    img: '../../assets/Stefany.jpg',
    id: 4
  }
}

//playerValues = transformation of the PlayersList obj's values to array
export const playerValues = Object.values(playerList);

const PlayerList = (props) => {
  //cardSection array will store all player cards(non-user)
  let cardSection = [];
  let cardText = props.cardText;
  //Iterates through each property in Player List object, inserts them into Cards
  //then stores into cardSection array
  for (const values of playerValues) {
    cardSection.push(<Card key={values.id} cardText={cardText} cardImg={values.img} cardTitle={values.name} />);
  }

  return (
    <div className="players-list">
      {cardSection}
    </div>
  );
}

export default PlayerList;
