import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './react-components/loginPage.js';
import Header from './react-components/form/header.js';
import PicPage from './react-components/picPage.js';
import GameStart from './react-components/gameStart/gameStart.js';
import LoadingPage from './react-components/loading/loadingPage.js';
import ResearchLoginPage from './react-components/researchLogin.js';
import Round1Start from './react-components/round1Start.js';
import ListGroupItem from './react-components/listGroup/listGroup.js';
import Round1Results from './react-components/round1Results.js';
import Elimination from './react-components/Elimination.js';
import { timeUp } from './react-components/round1Start.js';
import { timer } from './react-components/round1Start.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      researchInfoBtn: false,
      loginBtn: false,
      picBtn: false,
      gameStartBtn: false,
      round1ResultsBtn: false,
      round1TimeUp: false
    };

    this.handleResearchInfoBtn = this.handleResearchInfoBtn.bind(this);
    this.handleLoginBtn = this.handleLoginBtn.bind(this);
    this.handlePicBtn = this.handlePicBtn.bind(this);
    this.handleGameStartBtn = this.handleGameStartBtn.bind(this);
    this.handleRound1ResultsBtn = this.handleRound1ResultsBtn.bind(this);
  }

  handleResearchInfoBtn() {
    this.setState(prevState =>({
      researchInfoBtn: !prevState.researchInfoBtn
    }));
  }

  handleLoginBtn() {
    this.setState(prevState =>({
      loginBtn: !prevState.loginBtn,
      researchInfoBtn: !prevState.researchInfoBtn
    }));
  }

  handlePicBtn() {
    this.setState(prevState =>({
      picBtn: !prevState.picBtn,
      loginBtn: !prevState.loginBtn
    }));
  }

  handleGameStartBtn() {
    this.setState(prevState =>({
      gameStartBtn: !prevState.gameStartBtn,
      picBtn: !prevState.picBtn
    }));
  }

  handleRound1ResultsBtn() {
    this.setState(prevState =>({
      round1ResultsBtn: !prevState.round1ResultsBtn,
      gameStartBtn: !prevState.gameStartBtn,
    }));
  }

  render() {
    const researchInfoBtnClicked = this.state.researchInfoBtn;
    const loginBtnClicked = this.state.loginBtn;
    const picBtnClicked = this.state.picBtn;
    const gameStartBtnClicked = this.state.gameStartBtn;
    const round1ResultsBtnClicked = this.state.round1ResultsBtn;
    const round1TimeUp = this.state.round1TimeUp;

    let output = <ResearchLoginPage researchBtn={this.handleResearchInfoBtn}/>;
    let currentPage;
    //if else if statement in charge of component cycling
    if(researchInfoBtnClicked){
      output = <Login loginBtnFirst={this.handleLoginBtn}></Login>;
    } else if(loginBtnClicked) {
      output = <PicPage uploadBtn={this.handlePicBtn}/>;
    } else if(picBtnClicked) {
      output = <GameStart gameStartBtn={this.handleGameStartBtn}/>;
    } else if(gameStartBtnClicked) {
      output = <Round1Start round1ResultsBtn={this.handleRound1ResultsBtn}/>;
    } else if(round1ResultsBtnClicked) {
      output = <Elimination/>;
    }

    return (
      <div>
        {output}
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
