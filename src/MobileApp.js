import React, {Component} from 'react';
import './App.css';
import CardContainer from './Mobile/Cards/CardContainer';
import ScoreBoard from './Mobile/ScoreBoard';
import Options from './Mobile/TopOptions/Options';

export default class MobileApp extends Component {

  state = {
    teamOneName: "Golden Geese",
    teamTwoName: "Thundermen",
    teamOneScore: 0,
    teamTwoScore: 0,
    teamOneRound: 1,
    teamTwoRound: 1,
    back: false,
    gameNameOne: "Chardee",
    gameNameTwo: "MacDennis",
    roundOneMax: 10,
    roundTwoMax: 5,
    roundThreeMax: 3,
    winner: ""
  }

  flipCard = () => {
    this.setState({back: !this.state.back})
  }

  awardCard = async(team) => {
    if (team === "teamOne") {
      await this.setState({teamOneScore: this.state.teamOneScore + 1})
      if (this.state.teamOneRound === 1 && this.state.teamOneScore > 9) {
        await this.setState({teamOneRound: 2, teamOneScore: 0})
        localStorage.setItem('teamOneScore', 0)
        localStorage.setItem('teamOneRound', 2)
      } else if (this.state.teamOneRound === 2 && this.state.teamOneScore > 4) {
        await this.setState({teamOneRound: 3, teamOneScore: 0})
        localStorage.setItem('teamOneScore', 0)
        localStorage.setItem('teamOneRound', 3)
      } else if (this.state.teamOneRound === 3 && this.state.teamOneScore > 2) {
        await this.setState({teamOneRound: 1, teamOneScore: 0, winner: this.state.teamOneName})
        localStorage.setItem('teamOneScore', 0)
        localStorage.setItem('teamOneRound', 1)
      } else {
        localStorage.setItem('teamOneScore', this.state.teamOneScore)
      }
    } else {
      if (this.state.teamTwoRound === 1 && this.state.teamTwoScore > 9) {
        await this.setState({teamTwoRound: 2, teamTwoScore: 0})
        localStorage.setItem('teamTwoScore', 0)
        localStorage.setItem('teamTwoRound', 2)
      } else if (this.state.teamTwoRound === 2 && this.state.teamTwoScore > 4) {
        await this.setState({teamTwoRound: 3, teamTwoScore: 0})
        localStorage.setItem('teamTwoScore', 0)
        localStorage.setItem('teamTwoRound', 3)
      } else if (this.state.teamTwoRound === 3 && this.state.teamTwoScore > 2) {
        await this.setState({teamTwoRound: 1, teamTwoScore: 0, winner: this.state.teamOneName})
        localStorage.setItem('teamTwoScore', 0)
        localStorage.setItem('teamTwoRound', 1)
      } else {
        localStorage.setItem('teamTwoScore', this.state.teamTwoScore)
      }
    }
    this.flipCard()
  }

  componentDidMount() {
    if (localStorage.getItem('teamOneScore')) {
      const oneScore = localStorage.getItem('teamOneScore')
      this.setState({teamOneScore: Number(oneScore)})
    }
    if (localStorage.getItem('teamTwoScore')) {
      const twoScore = localStorage.getItem('teamTwoScore')
      this.setState({teamTwoScore: Number(twoScore)})
    }
    if (localStorage.getItem('teamOneRound')) {
      const oneRound = localStorage.getItem('teamOneRound')
      this.setState({teamOneRound: Number(oneRound)})
    }
    if (localStorage.getItem('teamTwoRound')) {
      const twoRound = localStorage.getItem('teamTwoRound')
      this.setState({teamTwoRound: Number(twoRound)})
    }
  }

  render(){
    return(
      <div className="mobile-container">
        <Options props={this.state}/>
        <CardContainer props={this.state} flipCard={this.flipCard} awardCard={this.awardCard}/>
        <ScoreBoard props={this.state}/>
      </div>
    )
  }
}
