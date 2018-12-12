import React from 'react';
import PlayerList from './playerList/playersList.js';
import { playerValues } from './playerList/playersList.js';
import ListGroupItem from './listGroup/listGroup.js';
import Card from './card/card.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Elimination from './Elimination.js';
import Round1Results from './round1Results';

library.add(faHourglassStart, faHourglass, faCheck);

//Responsible for keeping track of time limit(180sec) for round 1
export let timeUp = false;


export class Round1Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {colors:['red', 'blue'], btnClicked: false, seconds: 0 };
    this.handleBtn = this.handleBtn.bind(this);
  }

  handleBtn() {
    this.setState(prevState => ({
      btnClicked: !prevState.btnClicked,
    }));
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const round1StartBtn = this.props.round1StartBtn;
    const timer = this.state.seconds;

    let children;
    let cardSection = [];
    let minutes = (Math.floor(timer/60));
    let seconds = Math.abs((minutes*60) - timer);
    //adds zero for seconds < 10 to display in correct format
    if(seconds < 10) {
      seconds = '0' + seconds;
    }
    let clock = minutes + ':' + seconds;
    let displayClock = <div id="round1-clock">{clock}</div>;
    let hourGlassClass = 'loading-icon';
    let hourGlassIconType = 'hourglass-start';

    if(this.state.btnClicked ){
      children = <p className="visible">please select the items on the left to sort</p>;
    }

    //test condition for hour glass transition
    for(const values of playerValues){
      // test conditions in order to give each user a unique finish time
      //In order to avoid error where all succedings ids of each player in PlayerValues
      // array would also recieve check icon to indicate completeness
     if(values.id == 2 && timer > 2){
       hourGlassClass = 'finished-icon';
       hourGlassIconType = 'check';
     }else if(values.id == 3 && timer > 9){
       hourGlassClass = 'finished-icon';
       hourGlassIconType = 'check';
     }else if(values.id == 4 && timer > 12){
       hourGlassClass = 'finished-icon';
       hourGlassIconType = 'check';
     }else{
       hourGlassClass = 'loading-icon';
       hourGlassIconType = 'hourglass-start';
     }
      cardSection.push(<Card
         children={this.state.btnClicked ? <FontAwesomeIcon className={hourGlassClass} icon={hourGlassIconType}/> : null}
         key={values.id}
         cardImg={values.img}
         cardTitle={values.name}/>
       );
    }

    if(timer == 10){
      timeUp = true;
    }
    console.log(timer);

    if( timeUp ){
      return <Round1Results rnd1ResultsBtn={this.props.round1ResultsBtn}/>
    } else {
      return(
        <div id="round1-start" className="container-fluid">
          <div className="row">
            <div id="round1-start-left" className="col col-7">
              {/*<PlayerList playerClass={this.state.btnClicked ? "player-progress" : null}/>*/}
              {/*<PlayerList
              cardChildren={this.state.btnClicked ? <FontAwesomeIcon className={hourGlassClass} icon={hourGlassIconType}/> : null}/>*/}
              <div className="players-list">{cardSection}</div>
              <h3>Round One: Lost On The Moon</h3>
              <p>Your spacecraft has crash-landed on the dark side of the moon.
               You are scheduled to rendevous with the mother ship 200 miles away
               on the lighted side of the moon. The crash has ruined the ship and
               destroyed all except 15 items of equipment. Your crew's survival
               on the moon depends on reaching the mothership, so you must choose
               the most critical items available to take on the 200-mile trip.</p>
              <p>Sort the items. The most important item should be at the top of
               the list, the least important item should be at the bottom of the
               list.</p>
              {children}
              <button onClick={this.handleBtn}
              className="btn btn-primary"
               type="submit" disabled={this.state.btnClicked ? true : false}>Start Round!</button>
            </div>
            <div id="round1-start-right" className="col col-5">
            {this.state.btnClicked ? displayClock : null}
            <ListGroupItem />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Round1Start;
