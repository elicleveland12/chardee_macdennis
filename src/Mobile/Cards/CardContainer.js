import React, {Component} from 'react';
import '../../App.css';
import ReactCardFlip from 'react-card-flip';
import CardBack from './CardBack';
import CardFront from './CardFront';

export default class CardContainer extends Component {


  render(){
    return(
      <div className="card-container">
        <ReactCardFlip isFlipped={this.props.props.back} flipDirection="horizontal">
          <CardBack flipCard={this.props.flipCard}>
          </CardBack>

          <CardFront flipCard={this.props.flipCard} awardCard={this.props.awardCard} teamOne={this.props.props.teamOneName} teamTwo={this.props.props.teamTwoName}>
          </CardFront>
        </ReactCardFlip>
      </div>
    )
  }
}
