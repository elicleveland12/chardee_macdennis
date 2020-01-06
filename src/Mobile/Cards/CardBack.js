import React, {Component} from 'react';
import '../../App.css';

export default class CardBack extends Component {

  state = {
    gameNameOne: "Chardee",
    gameNameTwo: "MacDennis"
  }

  render(){
    return(
      <div className="card" onClick={this.props.flipCard}>
        <h1 className="iasip-text">{this.state.gameNameOne}</h1>
        <h1 className="iasip-text">{this.state.gameNameTwo}</h1>
      </div>
    )
  }
}
