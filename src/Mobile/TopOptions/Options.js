import React, {Component} from 'react';
import '../../App.css';
import TeamName from './TeamName';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

export default class Options extends Component {

  state = {
    menuOpen: false
  }

  render(){
    return(
      <div className="top-options">
        <TeamName name={this.props.props.teamOneName}/>
        <div style={{height: '100%', width: '30%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {this.state.menuOpen ?
            <MenuOpenIcon style={{fontSize: 40}} onClick={()=>this.setState({menuOpen: false})}/>
          :
            <MenuIcon style={{fontSize: 40}} onClick={()=>this.setState({menuOpen: true})}/>
          }
          {this.state.menuOpen ?
            <div style={{display: 'flex', flexDirection: 'column', paddingLeft: 10, position: 'absolute', top: 71, left: 100, right: 0, height: 300, backgroundColor: 'rgba(223, 230, 233,0.98)', borderBottomLeftRadius: 10, zIndex: 999, border: '2px solid black', boxShadow: '1px 4px 4px rgba(0, 0, 0, .55)'}}>
              <h1 style={{color: 'rgba(9, 132, 227,1.0)'}}>options</h1>
              <h1 style={{color: 'rgba(9, 132, 227,1.0)'}}>options</h1>
              <h1 style={{color: 'rgba(9, 132, 227,1.0)'}}>options</h1>
            </div>
          :
            null
          }
        </div>
      </div>
    )
  }
}
