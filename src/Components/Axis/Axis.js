import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import '../Allies/Allies.css';
import AxisChat from '../AxisChat/AxisChat';

class Axis extends Component{
    constructor(props){
      super(props)

      this.state = {

        players: []
      }
    }

  componentDidMount(){
     if(!this.props.user.side){
      this.props.history.push('/Gajograd2021')
      alert('Please register for event to access Command Room')
    }
    else if(this.props.user.side !== 'axis'){
      this.props.history.push('/Gajograd2021')
      alert('No Spies!')
    }
    this.getAxis();
  }

  getAxis = () => {
    Axios.get('/api/axisplayers')

    .then(res => this.setState({players: res.data}))
    .catch(err => console.log(err));
  }

  render(){
      const mapPlayers = this.state.players.map((player, i) => (
        <div className='player-chart' key={i} >
          <img src={player.profile_img} />
          <p>{player.name}</p>
          <p className='player-faction'>{player.faction}</p>
        </div>
      ))

    return(
      <div className='allies-main'>
        <div className='allies-container'>
        <h1>Axis Command Room</h1>

        <div className='player-container'>
        {mapPlayers}
        </div>

        <AxisChat/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Axis);