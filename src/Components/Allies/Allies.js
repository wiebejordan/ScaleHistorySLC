import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import '../Allies/Allies.css';
import AlliesChat from '../AlliesChat/AlliesChat'


class Allies extends Component{
    constructor(props){
      super(props)

      this.state = {

        players: []
        
      }
    }

  componentDidMount(){
    // if(!this.props.user.side){
    //   this.props.history.push('/Gajograd2021')
    //   alert('Please register for event to access Command Room')
    // }
    // else if(this.props.user.side !== 'allies'){
    //   this.props.history.push('/Gajograd2021')
    //   alert('No Spies!')
    // }
    this.getAllies();
  }

  getAllies = () => {
    Axios.get('/api/alliedplayers')

    .then(res => this.setState({players: res.data}))
    .catch(err => console.log(err));
  }

  
  

  

  render(){
      const mapPlayers = this.state.players.map((player, i) => (
        <div key={i} className='player-chart' >
          <img src={player.profile_img} />
          <p>{player.name}</p>
          <p>{player.faction}</p>
        </div>
      ))

    return(
      <div className='allies-main'>
        <div className='allies-container'>
        <h1>Allied Command Room</h1>
        
        <div className='player-container'>
        {mapPlayers}
        </div>

        <AlliesChat/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Allies);