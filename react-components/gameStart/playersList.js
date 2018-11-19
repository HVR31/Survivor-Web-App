import React from 'react';
import Card from '../card/card.js';
import {userPhoto} from '../form/picGroup.js';

const PlayerList = (props) => {
  const defaultPic = '../../assets/default.jpg';
  const playerList = {
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
  const playerValues = Object.values(playerList);
  //cardSection array will store all player cards(non-user)
  let cardSection = [];

  //Iterates through each property in Player List object, inserts them into Cards
  //then stores into cardSection array
  for (const values of playerValues) {
    console.log(values);
    cardSection.push(<Card key={values.id} cardImg={values.img} cardTitle={values.name} cardText={values.age}/>);
  }

  return (
    <React.Fragment>
      {cardSection}
    </React.Fragment>
  );
}

export default PlayerList;
