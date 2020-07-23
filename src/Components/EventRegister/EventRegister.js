import React, {Component, Profiler} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

class EventRegister extends Component{
    constructor(props){
      super(props)

      this.state = {
        name: '',
        side: '',
        faction: '',
        payed: false,
        selectedOption: 'allies'
      }
    }

    handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    };

    handleInput = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }


    handleEventRegister = () => {
      const {player_id, name, side, faction, payed} = this.state;

      if(this.state.selectedOption === 'allies'){
        Axios.post('/api/alliedregister', {player_id: this.props.user.user_id, name: this.state.name, side: this.state.selectedOption, faction: this.state.faction, payed: this.state.payed})
        .then(() => {
          this.props.history.push('/Allies');
        })
        .catch(err => console.log(err));}

      else if(this.state.selectedOption === 'axis'){
        Axios.post('/api/axisregister', {player_id: this.props.user.user_id, name: this.state.name, side: this.state.selectedOption, faction: this.state.faction, payed: this.state.payed})
        .then(() => {
          this.props.history.push('/Axis');
        })
        .catch(err => console.log(err));}
      }
      
    


  render(){
    return(
      <div>
        EventRegister

        Name: <input
        name='name'
        value={this.state.name}
        onChange={e => this.handleInput(e)}
        placeholder='name'
        />

        <form>
          <div className="radio">
            <label>
              <input type="radio" value="allies" checked={this.state.selectedOption === 'allies'}
              onChange={this.handleOptionChange} />
            Allies
            </label>
          </div>
    
          <div className="radio">
            <label>
              <input type="radio" value="axis" checked={this.state.selectedOption === 'axis'}
              onChange={this.handleOptionChange}/>
            Axis
            </label>
          </div>
        </form>

        Faction: <input
        name='faction'
        value={this.state.faction}
        onChange={e => this.handleInput(e)}
        placeholder='enter faction'
        />

        <button onClick={this.handleEventRegister}>Register for Gajograd 2021</button>
        
        

      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(EventRegister);