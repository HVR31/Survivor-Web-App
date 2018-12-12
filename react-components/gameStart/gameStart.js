import React from 'react';
import PlayerList from '../playerList/playersList.js';
import LoadingPage from '../loading/loadingPage.js';

export class GameStart extends React.Component {
  constructor(props){
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
      //Causes a 6 sec delay for component to be rendered
      setTimeout(() => this.setState({ loading: false }), 6000);
  }

  componentWillUnmount() {

  }

  render(){
    const loading = this.state.loading;

    //While state loading is true, loading page is displayed
    if(loading) {
      return <LoadingPage text="Gathering your team" delay={500}/>
    }

    return(
      <div id="game-start" className="container-fluid">
        <h2>Your Team</h2>
        <div className="row">
          <div className="col col-12">
            <PlayerList/>
            <button onClick={this.props.gameStartBtn} className="btn btn-primary" type="submit">Begin</button>
          </div>
        </div>
      </div>

    );
  }
}

export default GameStart;
