import React, {Component, Profiler} from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

class EventRegister extends Component{
    constructor(props){
      super(props)

      this.state = {
        name: '',
        faction: '',
        payed: false,
        selectedOption: 'allies'
      }
    }

    componentDidMount(){
      if(!this.props.user.username){
        this.props.history.push('/Gajograd2021')
        alert('please log in to register for event')
      }
      else if(this.props.user.side){
        this.props.history.push('/Gajograd2021')
        alert(`${this.props.user.username}, you are already registered for this event with the ${this.props.user.side}! 
        Head to the Command Room for briefing!`)
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

        Axios.post('/api/playerregister', {player_id: this.props.user.user_id, name: this.state.name, side: this.state.selectedOption, faction: this.state.faction, payed: this.state.payed})
        .then(() => { alert('You are now registered for Gajograd 2021! Head to the Command Room to plan with your teammates!')
          
        })
        .catch(err => console.log(err));

        Axios.put(`/api/addside/${this.props.user.user_id}`, {side: this.state.selectedOption})
        .then(() => this.props.history.push(`/Gajograd2021`))
        .catch(err => console.log(err))

        Axios.post('/')
        
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