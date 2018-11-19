import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js'
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './react-components/loginPage';
import Header from './react-components/form/header.js';
import PicPage from './react-components/picPage.js';
import GameStart from './react-components/gameStart/gameStart.js';
import PlayerList from './react-components/gameStart/playersList.js';
import LoadingPage from './react-components/loading/loadingPage.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {loginBtn: false, picBtn: false, gameStartBtn: false};
    this.handleLoginBtn = this.handleLoginBtn.bind(this);
    this.handlePicBtn = this.handlePicBtn.bind(this);
    this.handleGameStartBtn = this.handleGameStartBtn.bind(this);
  }

  handleLoginBtn() {
    this.setState(prevState =>({
      loginBtn: !prevState.loginBtn
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
      gameStartBtn: !prevState.gameStartBtn
    }));
  }

  render() {
    const loginBtnClicked = this.state.loginBtn;
    const picBtnClicked = this.state.picBtn;
    const gameStartBtnClicked = this.state.gameStartBtn;

    let output = <Login loginBtnFirst={this.handleLoginBtn}></Login>;

    //if else if statement in charge of component cycling
    if(loginBtnClicked) {
      output = <PicPage uploadBtn={this.handlePicBtn}/>;
    } else if(picBtnClicked) {
      output = <GameStart gameStartBtn={this.handleGameStartBtn}/>;
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
