import React, {Component, Profiler} from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import '../Axis/Axis.css';

class Axis extends Component{
    constructor(props){
      super(props)

      this.state = {

        players: []
      }
    }

  componentDidMount(){
    // if(!this.props.user.side){
    //   this.props.history.push('/Gajograd2021')
    //   alert('please register for event to enter Command Room')
    // }
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
          <img src={player.profile_img} style={{
          height: '50px',
          width: '50px',
        }}/>
          <p>{player.name}</p>
          <p>{player.faction}</p>
        </div>
      ))

    return(
      <div>
        Axis
        {mapPlayers}
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Axis);