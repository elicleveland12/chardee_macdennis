import React, {Component} from 'react';
import '../../App.css';

export default class CardFront extends Component {

  render(){
    return(
      <div className="card">
        <img src={require('../../images/dart_card.png')} alt="darts" style={{height: 350}}/>
        <div style={{position: 'absolute', bottom: 10, left: 0, right: 0, height: 70, display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <div style={{width: '40%', height: '95%', border: '3px solid black', borderRadius: 10, backgroundColor: '#dfe6e9', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.props.awardCard("teamOne")}>
            <h3 style={{fontFamily: 'textile', textAlign: 'center', fontSize: 14}}>{this.props.teamOne}</h3>
          </div>
          <div style={{width: '40%', height: '95%', border: '3px solid black', borderRadius: 10, backgroundColor: '#dfe6e9', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>this.props.awardCard("teamTwo")}>
            <h3 style={{fontFamily: 'textile', textAlign: 'center', fontSize: 14}}>{this.props.teamTwo}</h3>
          </div>
        </div>
      </div>
    )
  }
}
