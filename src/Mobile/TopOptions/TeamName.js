import React, {Component} from 'react';
import '../../App.css';

export default class TeamName extends Component {


  render(){
    return(
      <div className="team-name">
        <h1 style={{fontFamily: 'textile'}}>{this.props.name}</h1>
      </div>
    )
  }
}
