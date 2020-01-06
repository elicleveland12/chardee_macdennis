import React, {Component} from 'react';
import '../App.css';

export default class ScoreBoard extends Component {

  render(){
    return(
      <div className="scoreboard">
        <div className="team-score">
          <p style={{fontFamily: 'textile'}}>{this.props.props.teamOneName}</p>
          <p style={{fontFamily: 'textile'}}>Rd {this.props.props.teamOneRound}</p>
          <h1 style={{fontFamily: 'textile'}}>{this.props.props.teamOneScore}</h1>
        </div>
        <div className="team-score">
          <p style={{fontFamily: 'textile'}}>{this.props.props.teamTwoName}</p>
          <p style={{fontFamily: 'textile'}}>Rd {this.props.props.teamTwoRound}</p>
          <h1 style={{fontFamily: 'textile'}}>{this.props.props.teamTwoScore}</h1>
        </div>
      </div>
    )
  }
}
